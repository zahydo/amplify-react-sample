import React, { Component } from "react";

import "./App.css";

const ListView = ({ contacts }) => (
  <div>
    <h2>All contacts</h2>
    <ul>
      {contacts.map((todo) => (
        <li key={todo.id}>
          {todo.name} - {todo.description} - ({todo.id})
        </li>
      ))}
    </ul>
  </div>
);

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  handleChange(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  async submit() {
    const { onCreate } = this.props;
    var input = {
      name: this.state.name,
      number: this.state.number,
    };

    this.setState({ name: "", number: "" });
    await onCreate({ input });
  }

  render() {
    return (
      <div>
        <input
          name="name"
          placeholder="Name"
          onChange={(ev) => {
            this.handleChange("name", ev);
          }}
          style={{
            padding: "8px 16px",
            margin: "5px",
          }}
        />
        <input
          name="number"
          type="number"
          placeholder="Phone"
          onChange={(ev) => {
            this.handleChange("number", ev);
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
      contacts: [],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Contact list</h1>
        <AddContact onCreate={(item) => alert(JSON.stringify(item))} />
        <ListView contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App
