import { Route, Switch } from "react-router-dom";
// Components
import FinishedTasks from "./components/FinishedTasks";
import UnFinishedTasks from "./components/UnFinishedTasks";
import TaskForm from "./components/TaskForm";
import { blueGrey } from "@material-ui/core/colors";

const primary = blueGrey[200]; // #f44336

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {/* <div style={{ backgroundColor: "red" }} */}
        <div
          className="p-3 mb-2 text-white"
          style={{ backgroundColor: primary }}
        >
          <div className="container mt-5" style={{ height: "100%" }}>
            <div className="row">
              <div class="col">
                <UnFinishedTasks />
              </div>
              <div class="col">
                <FinishedTasks />
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </Route>
      <Route path="/form">
        <div
          className="p-3 mb-2 text-black"
          style={{ backgroundColor: primary }}
        >
          <TaskForm />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
