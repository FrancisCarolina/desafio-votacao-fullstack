import React from "react";
import "./ResultadoVotacao.css";
import { Chart } from "react-google-charts";

const ResultadoVotacao = (props) => {
  const data = [
    ["Resposta", "Quantidade", { role: "style" }],
    ["Sim", 45, "#ff9696"],
    ["Não", 30, "#ffed84"],
  ];

  const options = {
    legend: { position: "none" },
  };
  return (
    <div className="resultado-votacao">
      <span>Você gosta de gatos?</span>
      <Chart
        chartType="ColumnChart"
        height="400px"
        width="90%"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ResultadoVotacao;
