import React, { useState } from "react";
import "./Votar.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";

const Votar = (props) => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    if (codigo === "") {
      setErro("Campo obrigatório");
    } else {
      setErro("");
      navigate(`/votar/${codigo}`);
      setCodigo("");
    }
  };

  const aoAlterado = (valor) => {
    setCodigo(valor);
    if (valor !== "") {
      setErro("");
    }
  };

  return (
    <div className="votar">
      <form onSubmit={aoSubmeter}>
        <h2>Insira o código da votação</h2>
        <CampoTexto
          obrigatorio
          valor={codigo}
          aoAlterado={(valor) => aoAlterado(valor)}
          onBlur={() => {
            if (codigo === "") {
              setErro("Campo obrigatório");
            }
          }}
          type={"text"}
        />
        {erro && <span className="erro">{erro}</span>}
        {erro === "" && <span className="erro-escondido">.</span>}
        <div>
          <Botao>Enviar</Botao>
        </div>
      </form>
    </div>
  );
};

export default Votar;
