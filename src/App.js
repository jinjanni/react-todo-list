import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ person: { img, name, age, info } }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age : {age}</h4>
      <h4>
        info : {info || "you need to know something about (missing info)"}
      </h4>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};

Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
  name: "james doe",
  info: "you need to know something about (missing info)",
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "bob",
        age: 24,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
        name: "dana",
        age: 33,
        info: "something about dana",
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/women/78.jpg",
        name: "spyder",
        age: 22,
        info: "something about spyder",
      },
    ],
  };

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </section>
    );
  }
}

function App() {
  return <PersonList />;
}

export default App;
