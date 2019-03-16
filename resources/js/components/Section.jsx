import React from 'react';
import Project from './Project';

function Section(props) {
  const { section } = props;

  return (
    <div>
      <h1>{section.title}</h1>
      {
        section.projects.map(project => (
          <Project project={project} key={project.id} />
        ))
      }
    </div>
  );
}

export default Section;
