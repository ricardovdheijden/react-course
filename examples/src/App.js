import ClassComponentWithState from "./components/02-class-and-functional/class-component-with-state";
import {Redirect, Route, Switch} from 'react-router-dom';
import Overview from "./components/overview";
import ComponentWithState from "./components/03-prop-types/component-with-state";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/class-functional" component={ClassComponentWithState} />
        <Route path="/prop-types" component={ComponentWithState} />
        <Route path="/overview" component={Overview} />
        <Redirect from="/" to="/overview" />
      </Switch>
    </div>
  );
}

export default App;
