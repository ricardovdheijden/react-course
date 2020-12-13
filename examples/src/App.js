import ClassComponentWithState from "./components/02-class-and-functional/class-component-with-state";
import {Redirect, Route, Switch} from 'react-router-dom';
import Overview from "./components/overview";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/class-functional" component={ClassComponentWithState} />
        <Route path="/overview" component={Overview} />
        <Redirect from="/" to="/overview" />
      </Switch>
    </div>
  );
}

export default App;
