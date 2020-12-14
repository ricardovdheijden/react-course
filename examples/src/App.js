import ClassComponentWithState from "./components/02-class-and-functional/class-component-with-state";
import {Route, Switch} from 'react-router-dom';
import Overview from "./components/overview";
import ComponentWithState from "./components/03-prop-types/component-with-state";
import ClassComponent from "./components/04-lifecycle-hooks/class-component";

function App() {
  return (
    <div>
      <Overview />
      <Switch>
        <Route path="/class-functional" component={ClassComponentWithState} />
        <Route path="/prop-types" component={ComponentWithState} />
        <Route path="/lifecycle-hooks" component={ClassComponent} />
      </Switch>
    </div>
  );
}

export default App;
