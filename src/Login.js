import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
  login = event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const userId = formData.get("userId");

    if (!userId) return alert("Digite o seu ID!");

    let headers = {
      "Content-Type": "application/graphql",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "*",
      "Access-Control-Allow-Header": "*"
    };

    axios
      .post(
        "http://localhost:8080/login?userId=" + userId,
        {},
        { headers: headers }
      )
      .then(res => {
        console.log("res", res);

        if (res.data) {
          localStorage.setItem("userId", userId);

          alert("Logado com sucesso!");

          this.props.history.push(`/votar`);
        } else alert("Usuário não encontrado");
      });
  };

  render() {
    return (
      <div>
        <h3>Entrar:</h3>

        <form onSubmit={this.login}>
          <label>
            ID:
            <input type="text" name="userId" />
          </label>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
