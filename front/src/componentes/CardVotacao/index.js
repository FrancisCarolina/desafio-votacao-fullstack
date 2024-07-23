import React from "react";
import "./CardVotacao.css";

const CardVotacao = (props) => {
  const formatarData = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };
  return (
    <section className="card-votacao" onClick={props.onClick}>
      <span className="titulo">{props.pauta}</span>
      <div className="conteudo">
        <div className="tempo">
          <span>Iniciada em: </span>
          <span>{formatarData(props.iniciada)}</span>
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
