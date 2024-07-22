import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/banner.png";
import Botao from "../Botao";

const Banner = (props) => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Inicie sua votação</h1>
        <h2>Lorem ipsum dolor</h2>
        <Botao>Criar uma Votação</Botao>
      </div>
      <img src={bannerImage} alt="Banner" className="image-banner" />
    </section>
  );
};

export default Banner;
