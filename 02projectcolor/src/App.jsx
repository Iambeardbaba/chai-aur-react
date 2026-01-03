import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap inset-x-0 bottom-12 justify-center duration-500">
          <div className="flex flex-wrap justify-between shadow-2xl rounded-2xl p-4 m-1 bg-amber-50 gap-4">
            <button
              onClick={() => setColor("red")}
              className=" outline-none text-white text-2xl py-1 rounded-full cursor-pointer p-4 m-2"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("olive")}
              className=" outline-none text-white text-2xl py-1 rounded-full cursor-pointer p-4 m-2"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("grey")}
              className=" outline-none text-white text-2xl py-1 rounded-full cursor-pointer p-4 m-2"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("orange")}
              className=" outline-none text-white text-2xl py-1 rounded-full cursor-pointer p-4 m-2"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("yellow")}
              className=" outline-none text-black text-2xl py-1 rounded-full cursor-pointer p-4 m-2"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
