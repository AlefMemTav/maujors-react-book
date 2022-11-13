import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
//import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Frontend from "./components/Frontend";
import "./index.css";
import Livro from "./components/Livro";
import axios from "axios";

class App extends Component {
  state = {
    livros: []
  };

  async componentDidMount(){
    try{
      const {data: livros} = await axios.get("/api/todosOsLivros.json");
      this.setState({livros});
    }catch(error){
      console.log(error);
      document
      .querySelectorAll(".principal")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<p class='erro'>Mensagem de erro</p>"
      );
    }
  }

  render() {
    return (
    <Router>
      <>
        <Topo/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/frontend" element={<Frontend />} />
            <Route exact path="/programacao" element={<Programacao />} />
            <Route exact path="/design" element={<Design />} />
            <Route exact path="/catalogo" element={<Catalogo />} />
            <Route component={NotFound} />
          </Routes>
        <Rodape />
      </>
    </Router>
    );
  }
}

export default App