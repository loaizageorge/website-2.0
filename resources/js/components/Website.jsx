import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function Website() {
  return (
    <div className="website">
      <div id="navbar"><Navbar /></div>
      <div id="about">Get ya about heya</div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact">Get ya contact heya</div>
      <div id="footer">Get ya foota heya</div>
    </div>
  );
}
if (document.getElementById('yeet')) {
  ReactDOM.render(<Website />, document.getElementById('yeet'));
}

export default Website;
