import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      teste: "Sim"
    };
  }

  click = () => {
    alert(1);
  };

  render() {
    return (
      <div>
        Home - {this.state.teste}
        <button onClick={() => this.click()}>Entrar</button>
      </div>
    );
  }
}
