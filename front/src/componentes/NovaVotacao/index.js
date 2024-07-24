import React, { useState } from "react";
import "./NovaVotacao.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import ListaRespostas from "../ListaRespostas";
import Loader from "../Loader";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const NovaVotacao = (props) => {
  const navigate = useNavigate();
  const [pauta, setPauta] = useState("");
  const [tempo, setTempo] = useState("00:00:00");
  const [erroPauta, setErroPauta] = useState("");
  const [erroTempo, setErroTempo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [textoModal, setTextoModal] = useState("");
  const [tituloModal, setTituloModal] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (tituloModal === "Sucesso!") {
      navigate("/");
    }
  };

  const aoAlteradoTempo = (valor) => {
    setTempo(valor);
  };
  const aoAlteradoPauta = (valor) => {
    setPauta(valor);
  };

  const geradorCodigo = () => {
    const uuid = uuidv4();

    const base64UUID = btoa(uuid.replace(/-/g, ""));

    return base64UUID.substring(0, 16);
  };

  const aoSalvar = async (evento) => {
    evento.preventDefault();
    if (tempo === "--:--:--" || pauta === "") {
      if (pauta === "") {
        setErroPauta("Campo obrigatório");
      }
      if (tempo === "--:--:--") {
        setErroTempo("Campo obrigatório");
      }
    } else {
      try {
        let tempoDefault = tempo;
        if (tempo === "00:00:00") {
          tempoDefault = "00:01:00";
        }
        const date = new Date();
        const res = await axios.post("http://localhost:8080/pauta", {
          iniciadoEm: date.toISOString(),
          duracao: tempoDefault,
          pergunta: pauta,
          codigo: geradorCodigo(),
          id_associado: +sessionStorage.getItem("associadoLogado"),
        });

        setPauta("");
        setTempo("00:00:00");
        setTextoModal(
          "A operação foi concluída com sucesso. ACESSO A PARTIR DO CÓDIGO GERADO: " +
            res.data.codigo
        );
        setTituloModal("Sucesso!");
      } catch (err) {
        console.log("Erro POST Pauta: ", err);
        setTextoModal("A operação falhou");
        setTituloModal("Falha!");
      }
      setLoading(false);
      handleOpenModal();
      setErroTempo("");
      setErroPauta("");
    }
  };

  return (
    <div className="nova-votacao">
      <Loader show={loading} />
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onOk={handleCloseModal}
        texto={textoModal}
        titulo={tituloModal}
      />
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
          <Botao type={"submit"}>Enviar</Botao>
        </div>
      </form>
    </div>
  );
};

export default NovaVotacao;
