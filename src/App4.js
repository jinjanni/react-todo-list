import React, { Component, Fragment } from "react";
import "./App.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    //console.log("called first: ", this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("called second: ", this.state.count)
    );

    //console.log("called third: ", this.state.count);
  };

  handleDecrease = () => {
    console.log("called first: ", this.state.count);
    this.setState(
      (state, props) => {
        return { count: state.count - props.amount };
      },
      () => {
        console.log("second", this.state.count);
      }
    );

    console.log("called third: ", this.state.count);
  };

  render() {
    return (
      <Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.handleIncrease}>
            increase
          </button>
          <span style={{ padding: "1rem" }}>count : {this.state.count} </span>
          <button type="button" onClick={this.handleDecrease}>
            decrease
          </button>
        </div>
      </Fragment>
    );
  }
}

export default class App4 extends Component {
  render() {
    return <Counter amount="2" />;
  }
}
