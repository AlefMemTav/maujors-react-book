import React from 'react'
import Home from './Home'

const Principal = () => {
  // const isbn ="Numero";
  // const titulo = "React";
  // const autor = "Maujor";
  const dados = [{isbn: "Numero", titulo: "React", autor: "Maujor"}];
  const tituloPagina = "Últimos lançamentos";
  return (
    <main className="principal">
      <Home
        // isbn={isbn}
        // titulo={titulo}
        // autor={autor}
        dados={dados}
        tituloPagina={tituloPagina}
      />
    </main>
  )
}

export default Principal