import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="http://georgeloaiza.com">
          <i className="fas fa-user-astronaut" />
          George Loaiza
        </a>
      </div>
      <div className="navbar__links">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </div>
    </nav>

  );
}

export default Navbar;
