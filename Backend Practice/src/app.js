const express = require("express");
const noteModel = require("./models/node.model");

/* 
CRUD Operations
*/

// Post

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // find returns data in array format
  res.status(200).json({
    message: "notes fetched successfully",
    data: notes,
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      description: description,
    },
  );
  res.status(200).json({
    message: "Note updated successfully",
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

module.exports = app;
