import React from "react";
import "./MinhasVotacoes.css";
import Botao from "../Botao";
import CardVotacao from "../CardVotacao";

const MinhasVotacoes = () => {
  const minhasVotacoes = [
    { id: 1, pauta: "Pauta 1", duracao: "20:00", iniciada: "22:00" },
    { id: 2, pauta: "Pauta 2", duracao: "30:00", iniciada: "21:00" },
    { id: 3, pauta: "Pauta 3", duracao: "00:30", iniciada: "20:00" },
  ];
  return (
    <section className="minhas-votacoes">
      <div>
        <Botao>Nova Votação</Botao>
      </div>
      <div className="lista-votacoes">
        {minhasVotacoes.map((votacao) => (
          <CardVotacao
            key={votacao.id}
            pauta={votacao.pauta}
            duracao={votacao.duracao}
            iniciada={votacao.iniciada}
          />
        ))}
      </div>
    </section>
  );
};

export default MinhasVotacoes;
