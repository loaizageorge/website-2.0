import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const { project } = props;

  return (
    <div>
      <h2>{project.title}</h2>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
