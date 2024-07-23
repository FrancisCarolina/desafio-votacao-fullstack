import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        MeuLogo
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/votar">Votar</Link>
        </li>
        <li>
          <Link to="/minhasVotacoes">Minhas Votacoes</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
