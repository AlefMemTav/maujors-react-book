import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Frontend from "./components/Frontend";
import "./index.css";

class App extends Component {
  render() {
    return (
    <Router>
      <>
        <Topo/>
          <Routes>
            <Route exact path="/" render={Home} />
            <Route exact path="/frontend" render={() => <Frontend />} />
            <Route exact path="/programacao" render={() => <Programacao />} />
            <Route exact path="/design" render={() => <Design />} />
            <Route exact path="/catalogo" render={(props) => <Catalogo />} />
            <Route component={NotFound} />
          </Routes>
          <Rodape />
      </>
    </Router>
    );
  }
}

export default App