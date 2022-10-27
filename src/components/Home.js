import React from "react";

const Home = props => {
  console.log(props);
  return (
    <>
      <h3>{props.tituloPagina}</h3>
      {/* <p>
        ISBN: {props.isbn}<br />
        Titulo: {props.titulo}<br />
        Autor: {props.autor}
      </p> */}
      {props.dados.map((item,i) => (
        <p>
          ISBN: {props.dados[i].isbn}<br />
          Titulo: {props.dados[i].titulo}<br />
          Autor: {props.dados[i].autor}
        </p>
      ))}
    </>
  );
};

export default Home