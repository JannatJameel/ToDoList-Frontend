import { useState } from "react";
import { createTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <h1> New Task </h1>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Task Name. </small>
      </div>

      <div className="form-group">
        <label>Priority</label>
        <input
          type="text"
          className="form-control"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Task Priority. </small>
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="boolean"
          className="form-control"
          name="status"
          value={task.status}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Task Status. </small>
      </div>

      <div className="form-group">
        <label>Deadline</label>
        <input
          type="date"
          className="form-control"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
        />
        <small className="form-text text-muted">Task Deadline. </small>
      </div>

      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default TaskForm;
