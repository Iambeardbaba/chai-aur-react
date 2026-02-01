import React, { useRef, useImperativeHandle, forwardRef } from "react";

const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playVideo: () => {
      videoRef.current.play();
    },
    pauseVideo: () => {
      videoRef.current.pause();
    },
    toggleMute: () => {
      videoRef.current.muted = !videoRef.current.muted;
    },
    restart: () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    },
  }));
  return (
    <video ref={videoRef} className=" w-full h-full object-cover rounded-lg">
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </video>
  );
});

export default VideoPlayer;
