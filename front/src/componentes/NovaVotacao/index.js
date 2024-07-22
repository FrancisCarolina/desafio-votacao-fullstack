import React, { useState } from "react";
import "./NovaVotacao.css";
import CampoTexto from "../CampoTexto";

const NovaVotacao = (props) => {
  const [tempo, setTempo] = useState("00:00:00");

  const aoAlterado = (valor) => {
    setTempo(valor);
  };

  return (
    <div>
      <CampoTexto
        type={"time"}
        obrigatorio
        label="Tempo de duração"
        valor={tempo}
        aoAlterado={(valor) => aoAlterado(valor)}
        step="1"
      />
    </div>
  );
};

export default NovaVotacao;
