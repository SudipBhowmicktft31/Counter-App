import React, { Component } from "react";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Styles from "../styles/Wrapper.module.css";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      startForm: 0,
      value: 0,
      isShow: true,
      isRunning: false,
      isDisable: false,
      isShowWelcome: true,
    };
  }
  inputChange(event) {
    this.setState({ value: event.target.value });
  }
  startCounterHandler() {
    this.setState({
      startForm: Number(this.state.value),
      isRunning: true,
      isShow: true,
      isDisable: true,
      value: 0,
    });
  }
  stopCounterHandler() {
    this.setState({ isRunning: false });
  }
  deleteCounterHandler() {
    this.setState({
      startForm: 0,
      value: 0,
      isRunning: false,
      isShow: false,
      isDisable: false,
    });
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ isShowWelcome: false });
    }, 3000);
  }
  componentDidUpdate() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    if (this.state.isRunning) {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          startForm: prevState.startForm + 1,
        }));
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={Styles.container}>
        {this.state.isShowWelcome ? (
          <Welcome />
        ) : (
          <div>
            <div className={Styles.wrapper}>
              <div className={Styles.input}>
                <label>
                  Enter A number
                  <input
                    type="number"
                    value={this.state.value}
                    onChange={this.inputChange.bind(this)}
                  />
                </label>
              </div>
              <div className={Styles.button}>
                <button
                  className={Styles.start}
                  onClick={this.startCounterHandler.bind(this)}
                >
                  Start
                </button>
                <button
                  className={Styles.stop}
                  onClick={this.stopCounterHandler.bind(this)}
                  disabled={!this.state.isDisable}
                >
                  Stop
                </button>
                <button
                  className={Styles.delete}
                  onClick={this.deleteCounterHandler.bind(this)}
                  disabled={!this.state.isDisable}
                >
                  Delete
                </button>
              </div>
            </div>
            {this.state.isShow && <Counter startForm={this.state.startForm} />}
          </div>
        )}
      </div>
    );
  }
}
export default Wrapper;
