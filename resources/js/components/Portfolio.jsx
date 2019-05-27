import React from 'react';
import Section from './Section';

// TODO: when backend is done, use the component did mount hook to make a request to get
// all projects by section

function Portfolio() {
  return (
    <section className="portfolio">
      {
        sections.map(section => (
          <Section
            key={section.id}
            section={section}
          />
        ))
      }
    </section>

  );
}

export default Portfolio;
