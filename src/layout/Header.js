import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand-title">
        <a href="https://github.com/MTouthang">
          <i className="fa-solid fa-terminal"></i>mTouthang
        </a>
        <p className="git-link">https://github.com/MTouthang</p>
      </div>
      {/*  eslint-disable-next-line */}
      <a
        href="#"
        className="toggle-button"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={"navbar-links " + (toggle ? "active" : "")}>
        <ul>
          <li>
            <a href="#work">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact_me">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
