import React from 'react';

function Footer() {
  return (
    <footer>
        <p>Coded with <i className="fas fa-heart"/> from Spring Valley</p>
        <p id="copyright">Copyright &copy;{ new Date().getYear() }</p>
    </footer>
  );
}
export default Footer;
