import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  registerVoting = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (!formData.get("name")) return alert("Digite o nome!");

    let headers = {
      "Content-Type": "application/graphql",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "*",
      "Access-Control-Allow-Header": "*"
    };

    axios
      .post(
        "http://localhost:8080/voting/add?name=" + formData.get("name"),
        {},
        { headers: headers }
      )
      .then(res => {
        alert("Pauta cadastrada com sucesso!");
      });
  };

  render() {
    return (
      <div>
        <h3>Cadastrar nova pauta:</h3>

        <form onSubmit={this.registerVoting}>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Cadastrar pauta" />
        </form>
      </div>
    );
  }
}
