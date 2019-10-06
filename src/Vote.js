import React, { Component } from "react";
import axios from "axios";

export default class Vote extends Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      votings: []
    };
  }

  componentWillMount = () => {
    let headers = {
      "Content-Type": "application/graphql",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "*",
      "Access-Control-Allow-Header": "*"
    };

    axios
      .get("http://localhost:8080/voting/getAll", { headers: headers })
      // {orderId: 2})
      .then(res => {
        console.log("res", res);

        if (res.data) {
          this.setState({
            votings: res.data
          });
        } else alert("Nenhuma pauta encontrada");

        /*const pdfBlob = new Blob([res.data], {
          type: "application/pdf"
        });
        saveAs(pdfBlob, "relatorio.pdf");*/
      });
  };

  vote = (votingId, description) => {
    let headers = {
      "Content-Type": "application/graphql",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "*",
      "Access-Control-Allow-Header": "*"
    };

    axios
      .post(
        "http://localhost:8080/vote/add?votingId=" +
          votingId +
          "&userId=" +
          localStorage.getItem("userId") +
          "&description=" +
          description,
        {},
        { headers: headers }
      )
      // {orderId: 2})
      .then(res => {
        alert("Voto realizado com sucesso!");

        /*const pdfBlob = new Blob([res.data], {
          type: "application/pdf"
        });
        saveAs(pdfBlob, "relatorio.pdf");*/
      });
  };

  render() {
    return (
      <div>
        <h3>Votar:</h3>

        <form onSubmit={this.registerVoting}>
          <label>
            {this.state.votings
              ? this.state.votings.map((voting, i) => {
                  return (
                    <div>
                      <label>
                        Pauta: <b>{voting.name}</b>
                      </label>
                      <input
                        type="radio"
                        name={"voting_" + voting.id}
                        onChange={() => this.vote(voting.id, "yes")}
                      />{" "}
                      Sim
                      <input
                        type="radio"
                        name={"voting_" + voting.id}
                        onChange={() => this.vote(voting.id, "yes")}
                      />{" "}
                      Não
                      <br />
                      <br />
                    </div>
                  );
                })
              : null}
          </label>
        </form>
      </div>
    );
  }
}
