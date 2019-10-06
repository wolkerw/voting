import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      teste: "Sim"
    };
  }

  registerVoting = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    //let data = { name: formData.get("name") };
    if (!formData.get("name")) return alert("Digite o nome!");

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });

    let headers = {
      "Content-Type": "application/graphql",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "*",
      "Access-Control-Allow-Header": "*"
    };

    // axios
    //   .get("http://localhost:8080/voting/add", data, { headers: headers })
    //   // {orderId: 2})
    //   .then(res => {
    //     alert("success");
    //     console.log("res", res);

    //     /*const pdfBlob = new Blob([res.data], {
    //       type: "application/pdf"
    //     });
    //     saveAs(pdfBlob, "relatorio.pdf");*/
    //   });

    axios
      .post(
        "http://localhost:8080/voting/add?name=" + formData.get("name"),
        {},
        { headers: headers }
      )
      // {orderId: 2})
      .then(res => {
        alert("success");
        console.log("res", res);

        /*const pdfBlob = new Blob([res.data], {
          type: "application/pdf"
        });
        saveAs(pdfBlob, "relatorio.pdf");*/
      });
  };

  // registerVoting = () => {
  //   alert(1);
  // };

  render() {
    return (
      <div>
        <h3>Nova pauta</h3>

        <form onSubmit={this.registerVoting}>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Cadastrar pauta" />
        </form>

        {/* {this.state.teste}
        <button onClick={() => this.click()}>Entrar</button> */}
      </div>
    );
  }
}
