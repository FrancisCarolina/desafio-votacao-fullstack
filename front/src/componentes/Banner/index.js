import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/banner.png";
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const aoClicar = () => {
    if (sessionStorage.getItem("associadoLogado")) {
      navigate("/novaVotacao");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Inicie sua votação</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          urna metus.
        </span>

        <Botao onClick={aoClicar}>Criar uma Votação</Botao>
      </div>
      <img src={bannerImage} alt="Banner" className="image-banner" />
    </section>
  );
};

export default Banner;
