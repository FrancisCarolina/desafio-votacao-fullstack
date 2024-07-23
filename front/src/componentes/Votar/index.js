import React, { useState } from "react";
import './Votar.css';
import Botao from "../Botao";
import CampoSelecionar from "../CampoSelecionar";

const Votar = (props) =>{
    const [pauta, ] = useState("Você gosta de gatos?");
    const [selecionado, setSelecionado] = useState("");

    const aoAlterado = (valor) => {
        setSelecionado(valor);
    };

    const aoSubmeter = (evento) =>{
        evento.preventDefault();
    }

    return <div className="votar">
        <form onSubmit={aoSubmeter}>
            <span>{pauta}</span>
            <CampoSelecionar label={"Sim"} valor={'sim'} aoAlterado={(valor) => aoAlterado(valor)} selectedOption={selecionado} primario/>
            <CampoSelecionar label={"Não"} valor={'nao'} aoAlterado={(valor) => aoAlterado(valor)} selectedOption={selecionado}/>
            <div className="tempo">
                <span>Tempo Restante:</span>
                <span>00:15</span>
            </div>
            <div>
                <Botao>Enviar Resposta</Botao>
            </div>
        </form>
    </div>
}

export default Votar