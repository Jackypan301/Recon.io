import React, { useRef, useState, useEffect } from "react";
import style from "./Welcome.css";

function Welcome(props) {

  if (!props.form) {
  return(
    <div className={style.text}>
      <p>
        Welcome Back to Identifier {props.user}
      </p>
    </div>
  )} else {
    return (
      <div className={style.text}>
        <p>
      Welcome Guest to Identifier
        </p>
      </div>
    )
  }
}

export default Welcome;