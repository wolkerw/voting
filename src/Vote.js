import React, { Component } from "react";
import axios from "axios";

export default class Vote extends Component {
  constructor(props) {
    super(props);

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
      .then(res => {
        console.log("res", res);

        if (res.data) {
          this.setState({
            votings: res.data
          });
        } else alert("Nenhuma pauta encontrada");
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
      .then(res => {
        alert("Voto realizado com sucesso!");
      });
  };

  render() {
    return (
      <div>
        <h3>Votar:</h3>

        <form onSubmit={this.registerVoting}>
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
                      onChange={() => this.vote(voting.id, "sim")}
                    />{" "}
                    Sim
                    <input
                      type="radio"
                      name={"voting_" + voting.id}
                      onChange={() => this.vote(voting.id, "não")}
                    />{" "}
                    Não
                    <br />
                    <br />
                  </div>
                );
              })
            : null}
        </form>
      </div>
    );
  }
}
