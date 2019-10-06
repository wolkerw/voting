import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import CadastrarPauta from "./CadastrarPauta";
import Vote from "./Vote";
import Login from "./Login";
import Results from "./Results";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Desafio Técnico</h2>
      <BrowserRouter>
        <div>
          <Route path="/cadastrar-pauta" exact component={CadastrarPauta} />
        </div>
        <div>
          <Route path="/votar" exact component={Vote} />
        </div>
        <div>
          <Route path="/" exact component={Login} />
        </div>
        <div>
          <Route path="/resultados" exact component={Results} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
