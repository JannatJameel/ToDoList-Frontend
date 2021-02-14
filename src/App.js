import { Route, Switch } from "react-router-dom";

// Components
import FinishedTasks from "./components/FinishedTasks";
import UnFinishedTasks from "./components/UnFinishedTasks";
import TaskForm from "./components/TaskForm";


const style = {
  root: {
    backgroundColor: "grey",
  },
};

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <div className="container mt-5" style={{}}>
            <div className="row">
              <div class="col">
                <UnFinishedTasks />
              </div>
              <div class="col">
                <FinishedTasks />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/form">
          <TaskForm />
        </Route>
      </Switch>
  );
}

export default App;
