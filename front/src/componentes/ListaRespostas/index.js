import React from "react";
import "./ListaRespostas.css";

const ListaRespostas = (props) => {
  const aoAdicionarRespostas = () => {};
  return (
    <div className="lista-respostas">
      <span>Respostas permitidas: </span>
      <div className="respostas">
        <label>
          <input type="checkbox" name="sim" checked disabled />
          Sim
        </label>
        <label>
          <input type="checkbox" name="nao" checked disabled />
          Não
        </label>
        <label>
          <input type="checkbox" name="nao sei" disabled checked={false} />
          Não sei
        </label>
      </div>
      <div className="botaoLista">
        <button onClick={aoAdicionarRespostas} disabled>
          Add Respostas
        </button>
      </div>
    </div>
  );
};

export default ListaRespostas;
