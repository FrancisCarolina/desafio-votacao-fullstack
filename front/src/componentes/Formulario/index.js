import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import axios from "axios";
import { setSessionStorageItem } from "../../utils/sessionUtils";

const Formulario = (props) => {
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");

  const aoAlterado = (valor) => {
    setCpf(valor);
    if (valor !== "") {
      setErro("");
    }
  };

  const buscarAssociadoPorCpf = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3003/associado?cpf=${cpf}`
      );
      const data = response.data;
      if (data.length > 0) {
        setSessionStorageItem("associadoLogado", data[0]);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("Erro GET Associado: ", err);
      return false;
    }
  };

  const aoSalvar = async (evento) => {
    evento.preventDefault();
    if (cpf === "") {
      setErro("Campo obrigatório");
    } else {
      setErro("");

      const achouAssociado = await buscarAssociadoPorCpf();
      try {
        if (!achouAssociado) {
          const res = await axios.post("http://localhost:3003/associado", {
            cpf: cpf,
          });
          console.log("RESPONSE POST: ", res.data);
          setSessionStorageItem("associadoLogado", res.data);
        }
        setCpf("");
      } catch (err) {
        console.log("Erro POST Associado: ", err);
      }
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
