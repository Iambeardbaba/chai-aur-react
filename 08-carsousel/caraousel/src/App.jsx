import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const thumbnailRefs = useRef([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get("https://picsum.photos/v2/list", { signal })
      .then((res) => {
        setImages(res.data);
        setLoading(false);
        //console.log(images);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request Cancelled:", err.message);
        } else {
          console.error("Error fetching images:", err);
        }
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const activeThumbnail = thumbnailRefs.current[currentIndex];
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevios();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevios = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <button
            onClick={handlePrevios}
            className="bg-gray-700 text-white rounded-lg px-2 py-6 m-2 font-bold left-2 top-1/2 hover:bg-gray-500 flex items-center justify-center cursor-pointer"
          >
            &lt;
          </button>
        </div>
        <div className="w-full h-[500px] flex justify-center items-center overflow-hidden relative object-cover m-2 p-2">
          {images.length > 0 ? (
            <img
              key={currentIndex}
              src={images[currentIndex]?.download_url}
              alt="carousel"
              className="max-h-full rounded-lg shadow-2xl transition-all duration-500 animate-carousel"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <button
            onClick={handleNext}
            className="bg-gray-700 text-white rounded-lg px-2 py-6 m-2 font-bold right-2 top-1/2 hover:bg-gray-500 flex items-center justify-center cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto p-5 m-4 px-[40%] gap-6 no-scrollbar cursor-pointer">
        {images.map((image, index) => (
          <img
            key={image.id}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            src={image.download_url}
            onClick={() => setCurrentIndex(index)}
            className={`h-20 w-20 rounded-lg transition-all object-cover ${index === currentIndex ? "border-4 border-gray-500 scale-125 z-10 shadow-lg " : "opacity-60 scale-100 hover:opacity-100"}`}
          />
        ))}
      </div>
    </>
  );
};

export default App;
