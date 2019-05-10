import React from 'react';
import Project from './Project';

function Section(props) {
  const { section } = props;

  return (
    <div>
      <h3 className="section-title">{section.name}</h3>
      <div className="section">
        {
          section.projects.map(project => (
            <Project project={project} key={project.id} />
          ))
        }
      </div>
    </div>
  );
}

export default Section;
