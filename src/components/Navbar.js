import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import './NavBar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="kwb Merchtem" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        >
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          {/*
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </li>
            */}
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/activiteiten">
              Activiteiten
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/kleine-raken">
              Kleine Raak
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/bestuur">
              Bestuur
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/blog">
              Laatste nieuws
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/about">
              Over kwb Merchtem
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          {/*
          <div className="navbar-group" style={{ padding: "0px" }}>
            Contact us
            <ul>
              <li className="navbar-item" style={{ padding: "0px" }}>
                <Link className="navbar-item" to="/contact">
              Contact 1
            </Link>
            </li>
              <li className="navbar-item" style={{ padding: "0px" }}>
                <Link className="navbar-item" to="/contact">
              Contact 2
            </Link>
            </li>
            </ul>
          </div>
          */}
          {/*
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li>
            */}
          {/*
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/decaporg/gatsby-plugin-decap-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </li>
            */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
