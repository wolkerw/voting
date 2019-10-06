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

        /*const pdfBlob = new Blob([res.data], {
        type: "application/pdf"
      });
      saveAs(pdfBlob, "relatorio.pdf");*/
      });
  };
  // constructor(props) {
  //   super(props);

  //   // Initial State
  //   this.state = {
  //     votings: []
  //   };
  // }

  // componentWillMount = () => {
  //   let headers = {
  //     "Content-Type": "application/graphql",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Method": "*",
  //     "Access-Control-Allow-Header": "*"
  //   };

  //   axios
  //     .get("http://localhost:8080/voting/getAll", { headers: headers })
  //     // {orderId: 2})
  //     .then(res => {
  //       console.log("res", res);

  //       if (res) {
  //         this.setState({
  //           votings: res.data
  //         });
  //       } else alert("Nenhuma pauta encontrada");

  //       /*const pdfBlob = new Blob([res.data], {
  //         type: "application/pdf"
  //       });
  //       saveAs(pdfBlob, "relatorio.pdf");*/
  //     });
  // };

  // vote = (votingId, description) => {
  //   alert("Voto realizado com sucesso!");
  // };

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

        {/* {this.state.teste}
        <button onClick={() => this.click()}>Entrar</button> */}
      </div>
    );
  }
}

export default withRouter(Login);
