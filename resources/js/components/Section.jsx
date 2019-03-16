import React from 'react';
import Project from './Project';

function Section(props) {
  console.log(props.section);
  return (
    <div>
      <h1>{props.title}</h1>
      props.section.map(project => (
      <Project project={project} key={project.id} />
      ))
    </div>
  );
}

export default Section;
