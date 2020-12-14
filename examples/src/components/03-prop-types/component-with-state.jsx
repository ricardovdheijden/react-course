import React, {Component} from 'react';
import ComponentWithoutState from "./component-without-state";

// Class Component with state
class ComponentWithState extends Component {
  state = {
    // name: 'Ricardo'
    name: 1234
  }

  render() {
    return (
      <div>
        <ComponentWithoutState name={this.state.name} />
      </div>
    );
  }
}

export default ComponentWithState;
