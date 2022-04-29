import React, { useState } from "react";
import Counter from "./Counter";
import Styles from "../Styles/Wrapper.module.css";
const Wrapper = () => {
  const [startForm, setStartForm] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const inputChange = (event) => {
    setStartForm(event.target.value);
  };
  const startCounterHandler = () => {
    if (!isRunning) {
      setIsRunning(true);
      console.log("button pressed");
    } else {
      setStartForm(0);
    }
  };
  const stopCounterHandler = () => {
    setIsStop(true);
  };
  const deleteCounterHandler = () => {
    setStartForm(0);
    setIsRunning(false);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.input}>
          <label>
            Enter A number
            <input type="number" value={startForm} onChange={inputChange} />
          </label>
        </div>
        <div className={Styles.button}>
          <button className={Styles.start} onClick={startCounterHandler}>
            Start
          </button>
          <button
            className={Styles.stop}
            onClick={stopCounterHandler}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className={Styles.delete}
            onClick={deleteCounterHandler}
            disabled={!isRunning}
          >
            Delete
          </button>
        </div>
      </div>
      {isRunning && <Counter isStop={isStop} startForm={startForm} />}
    </div>
  );
};
export default Wrapper;
