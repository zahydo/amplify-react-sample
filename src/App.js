import React, { Component } from "react";

import "./App.css";

const ListView = ({ todos }) => (
  <div>
    <h2>All Todos</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name} - {todo.description} - ({todo.id})
        </li>
      ))}
    </ul>
  </div>
);

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  handleChange(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  async submit() {
    const { onCreate } = this.props;
    var input = {
      name: this.state.name,
      description: this.state.description,
    };

    this.setState({ name: "", description: "" });
    await onCreate({ input });
  }

  render() {
    return (
      <div>
        <input
          name="name"
          placeholder="name"
          onChange={(ev) => {
            this.handleChange("name", ev);
          }}
          style={{
            padding: "8px 16px",
            margin: "5px",
          }}
        />
        <input
          name="description"
          placeholder="description"
          onChange={(ev) => {
            this.handleChange("description", ev);
          }}
          style={{
            padding: "8px 16px",
            margin: "5px",
          }}
        />
        <button
          style={{
            padding: "8px 16px",
            margin: "5px",
          }}
          onClick={this.submit.bind(this)}
        >
          Add
        </button>
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TODO list</h1>
        <AddTodo onCreate={(item) => alert(JSON.stringify(item))} />
        <ListView todos={this.state.todos} />
      </div>
    );
  }
}

export default App
