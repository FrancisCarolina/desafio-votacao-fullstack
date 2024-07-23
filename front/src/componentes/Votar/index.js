import React, { useState } from "react";
import "./Votar.css";
import Botao from "../Botao";
import CampoSelecionar from "../CampoSelecionar";
import Tempo from "../Tempo";

const Votar = (props) => {
  const date = new Date(2024, 6, 23, 12, 44, 0); // 23 de julho de 2024, meia-noite
  const tempoDuracao = "1:10";
  const [pauta] = useState("Você gosta de gatos?");
  const [selecionado, setSelecionado] = useState("");
  const [tempoAcabou, setTempoAcabou] = useState(false);

  const aoAlterado = (valor) => {
    setSelecionado(valor);
  };

  const aoSubmeter = (evento) => {
    evento.preventDefault();
  };

  const aoMudarTempo = (tempoRestante) => {
    if (
      tempoRestante.hours === 0 &&
      tempoRestante.minutes === 0 &&
      tempoRestante.seconds === 0
    ) {
      setTempoAcabou(true);
    } else {
      setTempoAcabou(false);
    }
  };

  return (
    <div className="votar">
      <form onSubmit={aoSubmeter}>
        <span>{pauta}</span>
        <CampoSelecionar
          label={"Sim"}
          valor={"sim"}
          aoAlterado={(valor) => aoAlterado(valor)}
          selectedOption={selecionado}
          primario
        />
        <CampoSelecionar
          label={"Não"}
          valor={"nao"}
          aoAlterado={(valor) => aoAlterado(valor)}
          selectedOption={selecionado}
        />
        <Tempo
          date={date}
          tempoDuracao={tempoDuracao}
          aoMudarTempo={(tempoRestante) => aoMudarTempo(tempoRestante)}
        />
        <div>
          <Botao disabled={tempoAcabou}>Enviar Resposta</Botao>
        </div>
      </form>
    </div>
  );
};

export default Votar;
