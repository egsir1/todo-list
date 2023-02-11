import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [inputVal, setInputVal] = useState("");

  const inputHandler = (e) => {
    setInputVal(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.dataPointer(inputVal);
    setInputVal("");
  };

  return (
    <div className={classes.main}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          value={inputVal}
          className={classes.input}
          type="text"
          placeholder="Add to-do..."
          required
        />
        <button className={classes.btn}> Add</button>
      </form>
    </div>
  );
};

export default Form;
