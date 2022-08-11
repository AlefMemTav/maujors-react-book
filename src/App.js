import React, {Component} from "react";

import TableHead from './components/TableHead';
import TableFoot from './components/TableFoot';
import TableBody from './components/TableBody';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount(){
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(books => this.setState({books}))
    .catch(function(error){
      console.log("Erro na requisição");
    })
    .finally(function(){
      console.log("Sempre retorna");
    });
  }

  handleRemoveRow = (id) => {
    const books = this.state.books.filter(l => l.id !== id);
    this.setState({books});
    console.log("Botão clicado");
  }

  handleOrdenarCrescente = (title) =>{
    const books = this.state.books.sort((a, b) =>
    a.title < b.title ? -1 : 0
    );
    this.setState({books});
  };

  handleOrdenarDecrescente = (title) =>{
    const books = this.state.books.sort((a, b) =>
    a.title < b.title ? -1 : 0
    );
    books.reverse();
    this.setState({books});
  };


  render(){
    return (
      <table className="table">
        <TableHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
         />
        <TableBody 
          books = {this.state.books}
          removeRow = {this.handleRemoveRow}
        />
        <TableFoot nmbBooks = {this.state.books.length} />
      </table>
    );
  }
}

export default App;
