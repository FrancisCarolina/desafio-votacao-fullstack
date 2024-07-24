import React, { useEffect, useState } from "react";
import "./ResultadoVotacao.css";
import { Chart } from "react-google-charts";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
import Modal from "../Modal";
import Tempo from "../Tempo";

const ResultadoVotacao = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [textoModal, setTextoModal] = useState("");
  const [tituloModal, setTituloModal] = useState("");
  const [pauta, setPauta] = useState();
  const [tempoAcabou, setTempoAcabou] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (tituloModal === "Falha!") {
      navigate("/minhasVotacoes");
    }
  };

  const [data, setData] = useState();

  const options = {
    legend: { position: "none" },
    vAxis: {
      format: "0",
    },
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
          `http://localhost:8080/pauta?id=${id}`
        );
        const data = response.data;
        if (data.length > 0) {
          setPauta(data[0]);
        }
      } catch (err) {
        console.log("Erro GET Associado: ", err);
        setTextoModal("A operação falhou");
        setTituloModal("Falha!");
        handleOpenModal();
        setLoading(false);
      }
    };
    const buscarResultadosPorVotacao = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/votos?idPauta=${id}`
        );
        const data = response.data;
        if (data.length > 0) {
          let qntSim = 0;
          let qntNao = 0;
          data.forEach((element) => {
            if (element.voto === "sim") {
              qntSim++;
            } else {
              qntNao++;
            }
          });
          setData([
            ["Resposta", "Quantidade", { role: "style" }],
            ["Sim", qntSim, "#ff9696"],
            ["Não", qntNao, "#ffed84"],
          ]);
        }
      } catch (err) {
        console.log("Erro GET Associado: ", err);
        setTextoModal("A operação falhou");
        setTituloModal("Falha!");
        handleOpenModal();
      }
      setLoading(false);
    };
    if (id) {
      buscarPautaPorId(id);
      buscarResultadosPorVotacao(id);
    }
  }, [id]);
  return (
    <div className="resultado-votacao">
      <Loader show={loading} />
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onOk={handleCloseModal}
        texto={textoModal}
        titulo={tituloModal}
      />
      {!!pauta && !!pauta.pergunta && <span>{pauta.pergunta}</span>}
      {!!data && data.length > 0 && (
        <Chart
          chartType="ColumnChart"
          height="400px"
          width="90%"
          data={data}
          options={options}
        />
      )}
      {!!pauta && !!pauta.codigo && (
        <div className="codigo">
          Código: <div>{pauta.codigo}</div>
        </div>
      )}
      {!!pauta && !!pauta.iniciadoEm && !!pauta.duracao && !tempoAcabou && (
        <Tempo
          date={pauta.iniciadoEm}
          tempoDuracao={pauta.duracao}
          aoMudarTempo={(tempoRestante) => aoMudarTempo(tempoRestante)}
        />
      )}
      {!!tempoAcabou && <div className="tempo-esgotado">Tempo esgotado</div>}
    </div>
  );
};

export default ResultadoVotacao;
