import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Tela Inicial", end: true },
  { to: "/equipes", label: "Equipes" },
  { to: "/projetos/filtro", label: "Projetos" },
  { to: "/galeria", label: "Galeria" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="/Logo.png" alt="IEEE Computer Society" className="logo" />
        </Link>
        <a href="https://www.ramoieeecefetrj.com.br" target="_blank" rel="noopener noreferrer">
          <img src="/LogoRamo.png" alt="Ramo Estudantil IEEE - CEFET/RJ" className="logo-ramo" />
        </a>
      </div>

      <ul className="nav-list">
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
