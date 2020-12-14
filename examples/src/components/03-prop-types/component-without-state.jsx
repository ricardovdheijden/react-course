import React from 'react';
import PropTypes from 'prop-types';

// Functional Component without state
function ComponentWithoutState(props) {
  // Overview of the props
  const {name} = props

  return (
    <div>{name}</div>
  );
};

ComponentWithoutState.propTypes = {
  name: PropTypes.string.isRequired
};

export default ComponentWithoutState;
