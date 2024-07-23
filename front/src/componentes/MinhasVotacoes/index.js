import React, { useEffect, useState } from "react";
import "./MinhasVotacoes.css";
import Botao from "../Botao";
import CardVotacao from "../CardVotacao";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
import Modal from "../Modal";

const MinhasVotacoes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [textoModal, setTextoModal] = useState("");
  const [tituloModal, setTituloModal] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (tituloModal === "Falha!") {
      navigate("/");
    }
  };

  const [minhasVotacoes, setMinhasVotacoes] = useState();
  const aoClicar = () => {
    navigate("/novaVotacao");
  };

  const stringParaDate = (string) => {
    return new Date(string);
  };

  useEffect(() => {
    const idAssociado = +sessionStorage.getItem("associadoLogado");
    const buscarPautasPorAssociado = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3003/pauta?idAssociado=${idAssociado}`
        );
        const data = response.data;
        if (data.length > 0) {
          //return true;
          setMinhasVotacoes(data);
        }
      } catch (err) {
        console.log("Erro GET Associado: ", err);
        setTextoModal("A operação falhou");
        setTituloModal("Falha!");
        handleOpenModal();
      }
      setLoading(false);
    };
    buscarPautasPorAssociado();
  }, []);
  return (
    <section className="minhas-votacoes">
      <Loader show={loading} />
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onOk={handleCloseModal}
        texto={textoModal}
        titulo={tituloModal}
      />
      <div>
        <Botao onClick={aoClicar}>Nova Votação</Botao>
      </div>
      <div className="lista-votacoes">
        {!!minhasVotacoes &&
          minhasVotacoes.length > 0 &&
          minhasVotacoes.map((votacao) => (
            <CardVotacao
              key={votacao.id}
              pauta={votacao.pergunta}
              duracao={votacao.duracao}
              iniciada={stringParaDate(votacao.iniciadoEm)}
              onClick={() => {
                navigate(`/minhasVotacoes/${votacao.id}`);
              }}
            />
          ))}
        {(!minhasVotacoes || minhasVotacoes.length === 0) && (
          <span>Você ainda não criou uma votação.</span>
        )}
      </div>
    </section>
  );
};

export default MinhasVotacoes;
