import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="login" element={<Formulario />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
