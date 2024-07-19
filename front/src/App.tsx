import React, { useState } from 'react';
import './App.css';
import Botao from './components/Botao';
import Input from './components/Input';

function App() {
  const [, setCampoTexto] = useState<string>();

  const aoDigitarCampoTextp = (texto:string) => {
    setCampoTexto(texto);
  }
  const aoEntrar = () => {
  }

  return (
    <div className="App">
      <h1>Início</h1>
      <h2>Entre com seu cpf</h2>
      <div className='form'>
        <Input onChange={aoDigitarCampoTextp}/>
        <Botao texto='Entrar' onClick={aoEntrar}/>
      </div>
    </div>
  );
}

export default App;
