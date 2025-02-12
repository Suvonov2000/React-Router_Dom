import React, { Component } from "react";

const wrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
};

class App_1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
    };
  }
  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter your name"
        />
        <input
          onChange={(e) => {
            this.setState({
              surname: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter your surname"
        />
        <h1>{this.state.name}</h1>
        <h1>{this.state.surname}</h1>
      </div>
    );
  }
}

export default App_1;
