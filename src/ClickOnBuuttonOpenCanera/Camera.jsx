import React, { useState, useRef } from "react";

const CameraComponent = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOpen(true);
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  return (
    <div>
      <button onClick={openCamera}>Open Camera</button>
      {isCameraOpen && <video ref={videoRef} autoPlay />}
    </div>
  );
};

export default CameraComponent;