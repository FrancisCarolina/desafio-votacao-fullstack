import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import NovaVotacao from "./componentes/NovaVotacao";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="login" element={<Formulario />} />
            <Route path="novaVotacao" element={<NovaVotacao />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
