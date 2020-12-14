import React, {Component} from 'react';

// Class Component with state
class ClassComponent extends Component {
  constructor() {
    super();
    console.log('constructor()')
  }

  state = {
    count: 0
  }

  componentDidMount() {
    console.log('componentDidMount()')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', { prevState, currentState: this.state } )
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }

  render() {
    console.log('render()')
    return (
      <>
        <h1>Counter = {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
      </>);
  }
}

export default ClassComponent;
