import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import ToDoInput from "./components/ToDoInput";
import { v4 as uuidv4 } from "uuid";

import ToDoList from "./components/ToDoList";
// github
export default class ToDoFinal extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "breakfast" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handleChange");
  };
  handleSubmit = (e) => {
    console.log("handleSubmit");
  };
  clearList = () => {
    console.log("clearList");
  };
  handleDelete = (id) => {
    console.log(`handleDelete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handleEdit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-10 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
