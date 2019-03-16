import React from 'react';
import Section from './Section';

// TODO: when backend is done, use the component did mount hook to make a request to get
// all projects by section
const sections = [
  {
    title: 'Front End',
    id: 1,
    projects: [
      {
        id: 1,
        title: 'Random Quote Machine',
        image: 'www.http://georgeloaiza.com/images/gallery/quote.png',
        codepen: 'https://codepen.io/xchendo/full/BzRRgz/',
        github: 'https://github.com/xchendo/Random-Quote-Machine',
      },
      {
        id: 2,
        title: 'Dungeon Crawler',
        image: 'www.http://georgeloaiza.com/images/gallery/quote.png',
        codepen: 'https://codepen.io/xchendo/full/BzRRgz/',
        github: 'https://github.com/xchendo/Random-Quote-Machine',
      },
    ],
  },
];

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
