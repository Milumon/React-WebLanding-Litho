import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nav/logo-white.png";
import "./MainNav.css";

function MainNav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item me-5">
              <a className="nav-link active liah" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active liah" to="/banner">
                Banner
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link className="nav-link active liah" to="/fichas">
                Fichas
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <a href="/" className="me-4 text-white">
              <i className="fas fa-search fa-1x"></i>
            </a>
            <a href="/" className="text-white">
              {" "}
              <i className="fas fa-grip-lines fa-1x"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
