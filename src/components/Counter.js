import React, { Component } from "react";
import Styles from "../styles/Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.startForm !== state.counter) {
      return {
        counter: props.startForm,
      };
    }
    return null;
  }

  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.counter}>{this.state.counter}</div>
      </div>
    );
  }
}

// const Counter = (props) => {
//   console.log("abc" + parseInt(props.startForm));
//   const [counter, setCounter] = useState(parseInt(props.startForm));

//   useEffect(() => {
//     let timeOut;
//     if (!props.isStop) {
//       timeOut = setInterval(() => {
//         setCounter((prevCount) => prevCount + 1);
//       }, 1000);
//     }
//     return () => {
//       clearInterval(timeOut);
//     }; //clean up function
//   }, [counter, props.isStop]);
//   return (
//     <div className={Styles.container}>
//       <div className={Styles.counter}>{counter}</div>
//     </div>
//   );
// };
export default Counter;
