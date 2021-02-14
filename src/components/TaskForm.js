import { useState } from "react";
import { createTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "../styles"

const TaskForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    name: "",
    priority: "medium",
    status: false,
    deadline: "",
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setTask({
      name: "",
      priority: "medium",
      status: false,
      deadline: "",
    });
  };

  const handleSubmit = (event) => {
    console.log(task);
    event.preventDefault();
    dispatch(createTask(task));
    resetForm();
    history.push("/");
  };

  return (
    <Form>
      <form onSubmit={handleSubmit}>

        <h1 style={{marginTop: "10%", marginLeft: "45%"}}> New Task </h1>

        <div className="form-group" style={{marginTop: "30px", marginLeft: "20%", marginRight: "20%"}}>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{marginLeft: "20%", marginRight: "20%"}}>
          <label>Priority</label>
          <div>
            <input type="radio" id="low" name="priority" value="low" onClick={handleChange}/>
            <label for="low">Low</label><br></br>
            <input type="radio" id="medium" name="priority" value="medium" onClick={handleChange}/>
            <label for="medium">Medium</label><br></br>
            <input type="radio" id="high" name="priority" value="high" onClick={handleChange}/>
            <label for="high">High</label><br></br>
          </div>
        </div>

        <div className="form-group" style={{marginLeft: "20%", marginRight: "20%"}}>
          <label>Deadline</label>
          <input
            type="date"
            className="form-control"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" style={{marginLeft: "20%", marginRight: "auto"}}>
          Create
        </button>

      </form>
    </Form>

  );
};

export default TaskForm;
