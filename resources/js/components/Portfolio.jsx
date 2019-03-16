import React from 'react';
import Section from './Section';

// TODO: when backend is done, use the component did mount hook to make a request to get
// all projects by section
const sections = [
  {
    title: 'Front End',
    id: 1,
    projects: [{
      id: 1,
      title: 'Random Quote Machine',
      image: 'www.http://georgeloaiza.com/images/gallery/quote.png',
      codepen: 'https://codepen.io/xchendo/full/BzRRgz/',
      github: 'https://github.com/xchendo/Random-Quote-Machine',
    }, {
      id: 2,
      title: 'Random Quote Machine',
      image: 'www.http://georgeloaiza.com/images/gallery/quote.png',
      codepen: 'https://codepen.io/xchendo/full/BzRRgz/',
      github: 'https://github.com/xchendo/Random-Quote-Machine',
    }],
  },
  {
    title: 'React',
    id: 2,
    projects: [],
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      {
        sections.map(section => (
          <Section
            key={section.id}
            title={section.title}
            section={section.projects}
          />
        ))
      }
    </div>

  );
}

export default Portfolio;
