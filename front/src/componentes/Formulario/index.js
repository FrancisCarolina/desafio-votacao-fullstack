import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";

const Formulario = (props) => {
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");

  const aoAlterado = (valor) => {
    setCpf(valor);
    if (valor !== "") {
      setErro("");
    }
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    if (cpf === "") {
      setErro("Campo obrigatório");
    } else {
      setErro("");
      //
      setCpf("");
    }
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Insira seu cpf para continuar</h2>
        <CampoTexto
          obrigatorio
          label="CPF"
          valor={cpf}
          aoAlterado={(valor) => aoAlterado(valor)}
          onBlur={() => {
            if (cpf === "") {
              setErro("Campo obrigatório");
            }
          }}
        />
        {erro && <span className="erro">{erro}</span>}
        {erro === "" && <span className="erro-escondido">.</span>}
        <div>
          <Botao>Enviar</Botao>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
