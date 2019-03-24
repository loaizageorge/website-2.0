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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, turpis nec luctus accumsan, augue metus cursus nisi, efficitur pharetra diam lectus non quam. Aenean nec turpis vestibulum, efficitur tellus sed, iaculis erat. Ut sollicitudin vitae mi non fringilla. Etiam maximus non orci sed malesuada. Etiam mauris elit, fermentum sit amet ornare in, dictum eget ligula',
        image: 'http://georgeloaiza.com/images/gallery/quote.png',
        demoText: 'Testing',
        demoLink: 'https://codepen.io/xchendo/full/BzRRgz/',
        githubLink: 'https://github.com/xchendo/Random-Quote-Machine',
      },
      {
        id: 2,
        title: 'Dungeon Crawler',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, turpis nec luctus accumsan, augue metus cursus nisi, efficitur pharetra diam lectus non quam. Aenean nec turpis vestibulum, efficitur tellus sed, iaculis erat. Ut sollicitudin vitae mi non fringilla. Etiam maximus non orci sed malesuada. Etiam mauris elit, fermentum sit amet ornare in, dictum eget ligula',
        image: 'http://georgeloaiza.com/images/gallery/quote.png',
        demoText: 'Testing',
        demoLink: 'https://codepen.io/xchendo/full/BzRRgz/',
        githubLink: 'https://github.com/xchendo/Random-Quote-Machine',
      },
      {
        id: 3,
        title: 'Dungeon Crawler',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, turpis nec luctus accumsan, augue metus cursus nisi, efficitur pharetra diam lectus non quam. Aenean nec turpis vestibulum, efficitur tellus sed, iaculis erat. Ut sollicitudin vitae mi non fringilla. Etiam maximus non orci sed malesuada. Etiam mauris elit, fermentum sit amet ornare in, dictum eget ligula',
        image: 'http://georgeloaiza.com/images/gallery/quote.png',
        demoText: 'Testing',
        demoLink: 'https://codepen.io/xchendo/full/BzRRgz/',
        githubLink: 'https://github.com/xchendo/Random-Quote-Machine',
      },
      {
        id: 4,
        title: 'Dungeon Crawler',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, turpis nec luctus accumsan, augue metus cursus nisi, efficitur pharetra diam lectus non quam. Aenean nec turpis vestibulum, efficitur tellus sed, iaculis erat. Ut sollicitudin vitae mi non fringilla. Etiam maximus non orci sed malesuada. Etiam mauris elit, fermentum sit amet ornare in, dictum eget ligula',
        image: 'http://georgeloaiza.com/images/gallery/quote.png',
        demoText: 'Testing',
        demoLink: 'https://codepen.io/xchendo/full/BzRRgz/',
        githubLink: 'https://github.com/xchendo/Random-Quote-Machine',
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
