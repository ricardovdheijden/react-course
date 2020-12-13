import React from 'react';

// Functional Component without state
function FunctionalComponentWithoutState(props) {
  // Overview of the props
  const {name} = props

  return (
    <div>{name}</div>
  );
}

export default FunctionalComponentWithoutState;
