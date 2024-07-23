import React from "react";
import './CampoSelecionar.css'

const CampoSelecionar = (props) =>{
    const aoSelecionarRadio = (event) => {
        props.aoAlterado(event.target.value);
      };
    return (
    <label className={`campo-selecionar ${props.primario? 'primario':'secundario'}`}>
        <input
            type="radio"
            value={props.valor}
            checked={props.selectedOption === props.valor}
            onChange={aoSelecionarRadio}
        />
        {props.label}
    </label>);
}

export default CampoSelecionar