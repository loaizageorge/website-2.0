import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function Website() {
  return (
    <div className="website">
      <>
        <Navbar />
        <Portfolio />
      </>
    </div>
  );
}
if (document.getElementById('yeet')) {
  ReactDOM.render(<Website />, document.getElementById('yeet'));
}

export default Website;
