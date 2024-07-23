// src/components/Modal.jsx

import React from "react";
import "./Modal.css"; // Importe o arquivo CSS para estilização
import Botao from "../Botao";

const Modal = ({ show, onClose, onOk, titulo, texto }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <div>
          <Botao onClick={onOk}>Continuar</Botao>
        </div>
      </div>
    </div>
  );
};

export default Modal;
