import React, { useEffect, useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  const [associadoLogado, setAssociadoLogado] = useState(
    sessionStorage.getItem("associadoLogado")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setAssociadoLogado(sessionStorage.getItem("associadoLogado"));
    };

    window.addEventListener("storageChange", handleStorageChange);

    return () => {
      window.removeEventListener("storageChange", handleStorageChange);
    };
  }, []);
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        MeuLogo
      </Link>
      <ul className="nav-links">
        <li>
          {associadoLogado ? (
            <Link to="/votar">Votar</Link>
          ) : (
            <Link to="/login">Votar</Link>
          )}
        </li>
        <li>
          {associadoLogado ? (
            <Link to="/minhasVotacoes">Minhas Votacoes</Link>
          ) : (
            <Link to="/login">Minhas Votacoes</Link>
          )}
        </li>
        <li>
          {associadoLogado ? (
            <span>Meu Perfil</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
