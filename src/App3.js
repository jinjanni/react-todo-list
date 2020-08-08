import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.refs.myName;
    const nameValue = name.value;

    const email = this.emails.value;
    const text = this.refs.myText;
    const pText = text.innerText;
    text.style.color = "red";

    console.log(nameValue, email, text, pText);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input
            type="email"
            ref={(emailValue) => (this.emails = emailValue)}
          />
          <button type="submit">submit</button>
        </form>
        <p ref="myText">hello world</p>
      </section>
    );
  }
}

export default class App3 extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
