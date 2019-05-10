import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const { project } = props;
  const  imgLink = "images/project_thumbnails/" + project.image;

  return (
    <section className="project">
      <img src={imgLink} alt="Test" />
      <div className="project__overlay">
        <h3 className="overlay-title">{project.name}</h3>
        <div className="overlay-text">
          <p>{project.description}</p>
          <a className="sourceLink" href={project.source}>Source Code</a>
          <a className="demoLink" href={project.demo}>{project.demo_text}</a>
        </div>
      </div>

    </section>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
