import React from "react";

type Props = {
    texto?: string;
    onClick?: () => void
}

const Botao = (props: Props) =>{
    return (
        <button onClick={props.onClick}>
            {props.texto}
        </button>
    )
}

export default Botao