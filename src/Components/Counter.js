import React, { useEffect, useState } from "react";
import Styles from "../Styles/Counter.module.css";
const Counter = (props) => {
  console.log('abc'+parseInt(props.startForm));
  const [counter, setCounter] = useState(parseInt(props.startForm));

  useEffect(() => {
    let timeOut;
    if (!props.isStop) {
      timeOut = setInterval(() => {
        setCounter((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timeOut);
    }; //clean up function
  }, [counter, props.isStop]);
  return (
    <div className={Styles.container}>
      <div className={Styles.counter}>{counter}</div>
    </div>
  );
};
export default Counter;
