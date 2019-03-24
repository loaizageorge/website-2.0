import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-box">
          <h1 className="header">George Loaiza</h1>
          <h2 className="subheader">Front End Developer</h2>
          <a className="btn-round btn-round-ghost js--scroll-to-gallery" href="#">
            Check out my work
          </a>
          <a className="btn-round btn-round-full js--scroll-to-contact " href="#">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
