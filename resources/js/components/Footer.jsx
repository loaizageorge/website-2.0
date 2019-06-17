import React from 'react';

function Footer() {
  return (
    <footer>
        <p>Coded with <i className="fas fa-heart heart-icon"/> from Spring Valley</p>
        <p id="copyright">Copyright &copy;{ new Date().getFullYear() }</p>
    </footer>
  );
}
export default Footer;
