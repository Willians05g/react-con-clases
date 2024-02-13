import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTask: [],
      newTask: "",
    };
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      allTask: [...prevState.allTask, this.state.newTask],
      newTask: "",
    }));
  };

  render() {
    const { allTask } = this.state;

    return (
      <div>
        {/* Ingreso de tareas  */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="into your task" onChange={this.handleChange} value={this.state.newTask}/>
          <button> add task </button>
        </form>

        {/* lista de tareas */}
        <h2> tus tareas para hoy</h2>
        <ul>
          {allTask.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
    );
  }
}
