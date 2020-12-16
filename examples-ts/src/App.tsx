import React, {useState} from 'react';
import './App.css';
import NameDisplay from "./NameDisplay";

function App() {
  const [name, setName] = useState<string>('Ricardo')
  // const [name, setName] = useState(1)

  return <NameDisplay name={name}/>;
}

export default App;
