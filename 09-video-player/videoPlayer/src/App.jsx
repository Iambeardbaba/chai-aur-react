import React, { useRef } from "react";
import VideoPlayer from "./components/VideoPlayer.jsx";

const App = () => {
  const playerRef = useRef(null);

  const handlePlay = () => playerRef.current?.playVideo();
  const handlePause = () => playerRef.current?.pauseVideo();
  const handleToggleMute = () => playerRef.current?.toggleMute();
  const handleRestart = () => playerRef.current?.restart();

  return (
    <>
      <div className="bg-gray-200 h-screen w-full flex flex-col justify-center ">
        <h1 className="flex justify-center bg-amber-200 text-xl font-bold mb-4 p-1 rounded-lg">
          Advanced Ref Controller
        </h1>

        <div className="flex justify-center item.center bg-black  rounded-2xl shadow-2xl border-slate-600 aspect-video object-cover w-11/12 max-w-5xl mx-auto">
          <VideoPlayer ref={playerRef} />
        </div>

        <div className="flex justify-center m-4">
          <button
            className="bg-gray-700 text-white cursor-pointer rounded-lg m-2 p-2 transition-all duration-100 active:scale-95 active:opacity-80"
            onClick={handlePlay}
          >
            ▶ Play
          </button>
          <button
            className="bg-gray-700 text-white cursor-pointer rounded-lg m-2 p-2 transition-all duration-100 active:scale-95 active:opacity-80"
            onClick={handlePause}
          >
            ⏸ Pause
          </button>
          <button
            className="bg-gray-700 text-white cursor-pointer rounded-lg m-2 p-2 transition-all duration-100 active:scale-95 active:opacity-80"
            onClick={handleToggleMute}
          >
            🔇 Mute Toggle
          </button>
          <button
            className="bg-gray-700 text-white cursor-pointer rounded-lg m-2 p-2 transition-all duration-100 active:scale-95 active:opacity-80"
            onClick={handleRestart}
          >
            🔄 Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
