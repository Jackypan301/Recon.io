import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import style from "./App.css";
import { drawReact } from "./canvas.js";
import Disclamer from "./Disclamer.jsx"
import Welcome from "./Welcome.jsx"
import axios from "axios";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {

    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };
  const [identify, setIdentify] = useState([]);
  const detect = async (net) => {

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {

      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;


      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;


      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;


      const obj = await net.detect(video);

      const ctx = canvasRef.current.getContext("2d");


      drawReact(obj, ctx);
    }
  };

  useEffect(()=>{runCoco()},[]);

  const [user, setUser] = useState('');
  const [form , setForm] = useState(true);
  const togglelogin = () => setForm(value => !value);
  const finduser = (loginInfo) => {
    axios.get(`${window.location.pathname}login`, {
      username: loginInfo.username,
      password: loginInfo.password
    })
    .then((res) => (setUser(loginInfo.username)))
  }

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
      <Disclamer form={form} login={togglelogin} finduser={finduser}/>
      <div >

        <button className={style.submit} onClick={() => togglelogin()}>
          Login into Account
        </button>
        <Welcome form={form} user={user}/>
      </div>
    </div>
  );
}

export default App;
