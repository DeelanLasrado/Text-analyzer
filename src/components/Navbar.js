import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className={`Container3 bg-${props.mode}`}>
      <nav className={`navbar navbar-expand-lg text-${props.textcol} navbar-light bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.textcol}`} to="/">
            {props.tittle}
          </Link>
          <button
            className={`navbar-toggler text-${props.textcol}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon bg-${props.mode}`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.textcol}`}>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.textcol}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.textcol}`} to="/about">
                  About
                </Link>
              </li>
            </ul>  
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-success text-${props.textcol}`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.togglebutton}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.btext}
          </label>
        </div>
      </nav>
    </div>
  );
}
