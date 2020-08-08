import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import ToDoInput from "./components/ToDoInput";

import ToDoList from "./components/ToDoList";

export default class ToDoFinal extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ToDoInput />
          <ToDoList />
        </div>
      </div>
    );
  }
}
