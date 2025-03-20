/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const CustomNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand brand">
          {/* <img
            src={require("../../../assets/images/logo.jpg")}
            alt="Logo"
            height={50}
            width={70}
          /> */}
          G Maps
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item">
                <a className="nav-link" href="#inicio">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre-nos">Sobre Nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#depoimentos">Depoimentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
          </ul>

          <Link to="/localiza" className="btn custom-button">
            Localiza Maps
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
