import React from 'react';

function About() {
  return (
    <section className="about js--section-about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className=" about__blurb">
          <p>Hey, thanks for visiting my website! My name is George, I live in Spring Valley, a small village just outside of New York City. My goal is to achieve mastery of both the front-end and the back-end to become an amazing full-stack developer. I love the creative aspect that comes with creating web applications, as well as conquering the challenges that arise during the development phase.</p>
          <p> This website showcases the projects I have worked on during this journey into web development. I am constantly learning and building new things, so new projects will be added frequently. </p>
        </div>
        <div className="about__me">
          <img id="profile" className="rounded-circle" src="http://georgeloaiza.com/images/profile.png" alt="My profile picture" />
        </div>
      </div>

    </section>
  );
}

export default About;
