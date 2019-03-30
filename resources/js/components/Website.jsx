import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';


function Website() {
  return (
    <div className="website">
      <>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />

      </>
    </div>
  );
}
if (document.getElementById('yeet')) {
  ReactDOM.render(<Website />, document.getElementById('yeet'));
}

export default Website;
