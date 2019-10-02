import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Exemplo2 from "./Exemplo2";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Teste</h2>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
        </div>
        <div>
          <Route path="/exemplo2" exact component={Exemplo2} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
