import React, { Component } from "react";

class App_1 extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  render() {
    const increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    const decrement = () => {
      if (this.state.count > 0)
        this.setState({
          count: this.state.count - 1,
        });
    };
    return (
      <div>
        <button onClick={increment}>+</button>
        {this.state.count}
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default App_1;
