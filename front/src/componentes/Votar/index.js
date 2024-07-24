import React, { useEffect, useState } from "react";
import "./Votar.css";
import Botao from "../Botao";
import CampoSelecionar from "../CampoSelecionar";
import Tempo from "../Tempo";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
import Modal from "../Modal";

const Votar = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [textoModal, setTextoModal] = useState("");
  const [tituloModal, setTituloModal] = useState("");
  const [pauta, setPauta] = useState();
  const [selecionado, setSelecionado] = useState("");
  const [tempoAcabou, setTempoAcabou] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (
      textoModal ===
        "Não foi possível encontrar uma votação com esse código!" ||
      tituloModal === "Sucesso!" ||
      tituloModal === "Atenção!"
    ) {
      navigate("/votar");
    }
  };

  const aoAlterado = (valor) => {
    setSelecionado(valor);
  };

  const enviarVoto = async () => {
    try {
      const res = await axios.post("http://localhost:3003/votos", {
        idAssociado: +sessionStorage.getItem("associadoLogado"),
        idPauta: pauta.id,
        voto: selecionado,
      });
      console.log("RESPONSE POST: ", res.data);
      setTextoModal("A operação foi concluída com sucesso.");
      setTituloModal("Sucesso!");
    } catch (err) {
      console.log("Erro POST votos: ", err);
      setTextoModal("Não foi possível enviar seu voto");
      setTituloModal("Falha!");
    }
    handleOpenModal();
  };

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    if (selecionado !== "") {
      enviarVoto();
    }
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

  useEffect(() => {
    const buscarPautaPorId = async (id) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3003/pauta?codigo=${id}`
        );
        const data = response.data;
        if (data.length > 0) {
          setPauta(data[0]);
        }
      } catch (err) {
        console.log("Erro GET pauta: ", err);
        setTextoModal("Não foi possível encontrar uma votação com esse código");
        setTituloModal("Falha!");
        handleOpenModal();
        setLoading(false);
      }
    };
    if (id) {
      buscarPautaPorId(id);
    }
  }, [id]);

  useEffect(() => {
    const validarJaVotado = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/votos?idPauta=${
            pauta.id
          }&idAssociado=${+sessionStorage.getItem("associadoLogado")}`
        );
        const data = response.data;
        if (data.length > 0) {
          setTextoModal(
            "Você já deu seu voto nessa pauta! Seu voto foi '" +
              data[0].voto +
              "'"
          );
          setTituloModal("Atenção!");
          handleOpenModal();
        }
      } catch (err) {
        console.log("Erro GET votos: ", err);
      }
      setLoading(false);
    };
    if (pauta) {
      validarJaVotado();
    }
  }, [pauta]);

  return (
    <div className="votar">
      <Loader show={loading} />
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onOk={handleCloseModal}
        texto={textoModal}
        titulo={tituloModal}
      />
      <form onSubmit={aoSubmeter}>
        {!!pauta && !!pauta.pergunta && <span>{pauta.pergunta}</span>}
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
        {!!pauta && !!pauta.iniciadoEm && !!pauta.duracao && (
          <Tempo
            date={pauta.iniciadoEm}
            tempoDuracao={pauta.duracao}
            aoMudarTempo={(tempoRestante) => aoMudarTempo(tempoRestante)}
          />
        )}
        <div>
          <Botao disabled={tempoAcabou}>Enviar Resposta</Botao>
        </div>
      </form>
    </div>
  );
};

export default Votar;
