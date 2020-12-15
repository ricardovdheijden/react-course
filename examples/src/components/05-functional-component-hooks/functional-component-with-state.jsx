import React, {useState, useEffect} from 'react';
import FunctionalComponentWithoutState from "./functional-component-without-state";

// Functional Component with state
function FunctionalComponentWithState() {
  const [name, setName] = useState('Ricardo');

  useEffect(() => {
    console.log('useEffect', name)
  });

  const handleNameChange = event => {
    const newName = event.target.value
    setName(newName)
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange}/>
      <FunctionalComponentWithoutState name={name} />
    </div>
  );
}

export default FunctionalComponentWithState;
