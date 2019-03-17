import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a href="http://georgeloaiza.com">
          <i className="fas fa-user-astronaut" />
            George Loaiza
        </a>
      </div>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>

  );
}

export default Navbar;
