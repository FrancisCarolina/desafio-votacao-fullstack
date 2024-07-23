import React from "react";
import "./CardVotacao.css";

const CardVotacao = (props) => {
  return (
    <section className="card-votacao" onClick={props.onClick}>
      <span className="titulo">{props.pauta}</span>
      <div className="conteudo">
        <div className="tempo">
          <span>Iniciada em: </span>
          <span>{props.iniciada}</span>
        </div>
        <div className="tempo">
          <span>Duração: </span>
          <span>{props.duracao}</span>
        </div>
      </div>
    </section>
  );
};

export default CardVotacao;
