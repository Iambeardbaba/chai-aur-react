import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get("https://picsum.photos/v2/list", { signal })
      .then((res) => {
        setImages(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          console.log("Request Cancelled", e.message);
        } else {
          console.log("Error fetching Images", e);
        }
      });
  }, []);

  return (
    <div className="bg-gray-400 flex flex-col justify-center h-screen w-full">
      <div className="flex text-white bg-amber-800 justify-center">App</div>
    </div>
  );
};

export default App;
