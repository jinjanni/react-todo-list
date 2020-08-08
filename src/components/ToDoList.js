import React, { Component, Fragment } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <h2>Hello from ToDoList</h2>
          <ToDoItem />
        </section>
      </Fragment>
    );
  }
}
