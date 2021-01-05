import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import style from "./App.css";
import { drawReact } from "./utlities.js";
import Disclamer from "./Disclamer.jsx"


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // Main function
  const runCoco = async () => {
    // 3.  Load network
    // e.g. const net = await cocossd.load();
    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };
  const [identify, setIdentify] = useState([]);
  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      // e.g. const obj = await net.detect(video);
      const obj = await net.detect(video);
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. Update drawing utility
      // drawSomething(obj, ctx)
      drawReact(obj, ctx);
    }
  };

  useEffect(()=>{runCoco()},[]);
  const [count, setCount] = useState(false);
  const [form , setForm] = useState(true);
  const togglelogin = () => setForm(value => !value);


  return (
    <div className={style.App}>
      <header >
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 840,
            height: 680,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 7,
            width: 840,
            height: 680,
          }}
        />
      </header>
      <Disclamer form={form} login={togglelogin} />
      <div >

        <button className={style.submit} onClick={() => togglelogin()}>
          Login into Account
        </button>
      </div>
    </div>
  );
}

export default App;
