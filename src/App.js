// Components
import FinishedTasks from "./components/FinishedTasks";
import UnFinishedTasks from "./components/UnFinishedTasks";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div class="col">
          <UnFinishedTasks />
        </div>
        <div class="col">
          <FinishedTasks />
        </div>
      </div>
    </div>
  );
}

export default App;
