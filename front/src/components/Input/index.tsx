import React from "react";

type Props = {
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'date' | 'number';
    onChange: (value: string) => void
}

const Input = (props: Props) =>{
    return (
        <input type={props.type} onChange={(event:any) => props.onChange(event.target.value)} placeholder={props.placeholder}/>
    )
}

export default Input