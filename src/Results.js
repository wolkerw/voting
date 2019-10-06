import React, { Component } from "react";
import axios from "axios";

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votingsWithVotes: [],
      prevVotingId: null
    };
  }

  sortByVotingId = (a, b) => {
    let comparison = 0;
    a = a.voting_id;
    b = b.voting_id;
    if (a > b) {
      comparison = 1;
    } else if (a < b) {
      comparison = -1;
    }
    return comparison;
  };

  componentWillMount = () => {
    let headers = {
      "Content-Type": "application/graphql",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "*",
      "Access-Control-Allow-Header": "*"
    };

    axios
      .get("http://localhost:8080/vote/getTotalVotesByVoting", {
        headers: headers
      })
      .then(res => {
        if (res.data) {
          let resSorted = res.data.sort(this.sortByVotingId);

          let prevVotingId = null;
          resSorted.map(votingWithVotes => {
            if (prevVotingId !== votingWithVotes.voting_id) {
              this.setState({
                votingsWithVotes:
                  this.state.votingsWithVotes +
                  `<br/><br/>Pauta: <b>${votingWithVotes.voting_name}</b> =>`
              });
            }

            this.setState({
              votingsWithVotes:
                this.state.votingsWithVotes +
                ` Votos ${votingWithVotes.vote_description}: <b>${votingWithVotes.amount}</b>`
            });

            prevVotingId = votingWithVotes.voting_id;

            return this.state.votingsWithVotes;
          });
        } else alert("Nenhuma pauta com votos encontrada");
      });
  };

  render() {
    return (
      <div>
        <h3>Resultados:</h3>

        <div
          dangerouslySetInnerHTML={{ __html: this.state.votingsWithVotes }}
        />
      </div>
    );
  }
}
