import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";

const Formulario = (props) => {
  const [cpf, setCpf] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    setCpf("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Insira seu cpf para continuar</h2>
        <CampoTexto
          obrigatorio
          label="CPF"
          valor={cpf}
          aoAlterado={(valor) => setCpf(valor)}
        />
        <Botao>Enviar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
