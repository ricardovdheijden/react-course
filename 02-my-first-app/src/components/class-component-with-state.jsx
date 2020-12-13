import React, {Component} from 'react';
import FunctionalComponentWithoutState from "./functional-component-without-state";

// Class Component with state
class ClassComponentWithState extends Component {
  state = {
    name: 'Ricardo'
  }

  handleNameChange = event => {
    const newName = event.target.value
    this.setState({ name: newName })
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameChange}/>
        <FunctionalComponentWithoutState name={this.state.name} />
      </div>
    );
  }
}

export default ClassComponentWithState;
