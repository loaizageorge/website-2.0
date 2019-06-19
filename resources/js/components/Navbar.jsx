import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="http://georgeloaiza.com">
          <i className="fas fa-user-astronaut" />
            George Loaiza
        </a>
      </div>
      <ul>
        <li><a className="reset" href="#projects">Projects</a></li>
        <li><a className="reset" href="#contact">Contact</a></li>
      </ul>
    </nav>

  );
}

export default Navbar;
