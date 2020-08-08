import React, { Component } from "react";
import { Fragment } from "react";

import "./App.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };

  handleChange = (event) => {
    //console.log(event.target);
    //console.log(event.target.name);
    //console.log(event.target.value);

    {
      /*const textValue = event.target.value;
    if (event.target.name === "firstName") {
      this.setState({
        firstName: textValue,
      });
    }*/
    }

    const valueUpper = event.target.value.toUpperCase();

    this.setState({
      [event.target.name]: valueUpper,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <section>
          <article>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <button type="submit">submit</button>
            </form>
          </article>
          <article>
            <h1>people</h1>

            <div>{this.state.people}</div>
          </article>
        </section>
      </Fragment>
    );
  }
}

function App2() {
  return (
    <Fragment>
      <Form />
    </Fragment>
  );
}

export default App2;
