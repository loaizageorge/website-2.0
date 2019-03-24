import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const { project } = props;

  return (
    <section className="project">
      <img src={project.image} alt="Test" />
      <div className="project__overlay">
        <h3 className="overlay-title">{project.title}</h3>
        <div className="overlay-text">
          <p>{project.description}</p>
          <a className="sourceLink" href={project.githubLink}>Source Code</a>
          <a className="demoLink" href={project.demoLink}>{project.demoText}</a>
        </div>
      </div>

    </section>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
