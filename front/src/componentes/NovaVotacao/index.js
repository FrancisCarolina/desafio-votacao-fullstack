import React, { useState } from "react";
import "./NovaVotacao.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import ListaRespostas from "../ListaRespostas";

const NovaVotacao = (props) => {
  const [pauta, setPauta] = useState("");
  const [tempo, setTempo] = useState("00:00:00");
  const [erroPauta, setErroPauta] = useState("");
  const [erroTempo, setErroTempo] = useState("");

  const aoAlteradoTempo = (valor) => {
    setTempo(valor);
  };
  const aoAlteradoPauta = (valor) => {
    setPauta(valor);
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    if (tempo === "00:00:00" || tempo === "--:--:--" || pauta === "") {
      if (pauta === "") {
        setErroPauta("Campo obrigatório");
      }
      if (tempo === "00:00:00" || tempo === "--:--:--") {
        setErroTempo("Campo obrigatório");
      }
    } else {
      setErroTempo("");
      setErroPauta("");
      setPauta("");
      setTempo("00:00:00");
    }
  };

  return (
    <div className="nova-votacao">
      <form onSubmit={aoSalvar}>
        <h2>Nova Votação</h2>
        <CampoTexto
          label="Digite a Pauta"
          valor={pauta}
          aoAlterado={(valor) => aoAlteradoPauta(valor)}
          onBlur={() => {
            if (pauta === "") {
              setErroPauta("Campo obrigatório");
            }
          }}
        />
        {erroPauta && <span className="erro">{erroPauta}</span>}
        {erroPauta === "" && <span className="erro-escondido">.</span>}
        <CampoTexto
          type={"time"}
          label="Tempo de duração"
          valor={tempo}
          aoAlterado={(valor) => aoAlteradoTempo(valor)}
          step="1"
          onBlur={() => {
            if (pauta === "") {
              setErroTempo("Campo obrigatório");
            }
          }}
        />
        {erroTempo && <span className="erro">{erroTempo}</span>}
        {erroTempo === "" && <span className="erro-escondido">.</span>}
        <ListaRespostas />
        <div>
          <Botao>Enviar</Botao>
        </div>
      </form>
    </div>
  );
};

export default NovaVotacao;
