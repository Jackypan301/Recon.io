import React, { useRef, useState, useEffect } from "react";
import style from "./Disclamer.css";

function Disclamer(props) {
  const [form, setState] = useState({
    username: '',
    password: ''
  });

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  if (props.form) {
  return (
    <div className={style.Modal} >


    <form className={style.form} >
    <p className={style.text}> While you are using our Services, please be aware of your surroundings, and play and communicate safely. You agree that your use of the Services is at your own risk, and that you will not use the Services to violate any applicable law, regulation, Event policies, or instructions as outlined in these Terms and you will not encourage or enable any other individual to do so.

Further, you agree that in conjunction with your use of the Services you will not make available any unlawful, inappropriate, or commercial Content (defined below). You agree that you will not submit inaccurate, misleading, or inappropriate Content, including data submissions, edits, or removal requests.

Jacky does not intend Apps to be medical or health devices, or provide medical or health advice. </p>
      <label className={style.text}>
        Email:
        <input
          className={style.textfield}
          type="email"
          placeholder="something@email.com"
          value={form.username}
          name="username"
          onChange={updateField}
          required
        />
      </label>
      <br />
      <label className={style.text}>
        Password:
        <input
          className={style.textfield}
          value={form.password}
          placeholder="mypassword"
          name="password"
          type="password"
          onChange={updateField}
          required
        />
      </label >
      <br />
      <button className={style.submit} onClick={() => {event.preventDefault(); props.login(); props.finduser(form);}}>Submit</button>
    </form>

    </div>
  )
  } else {
    return (
      null
    )
  }

}

export default Disclamer;