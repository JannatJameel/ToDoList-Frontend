import { useState } from "react";
import { createTask } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "../styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
        <h1 style={{ marginTop: "10%", marginLeft: "45%" }}> New Task </h1>

        <div
          className="form-group"
          style={{ marginTop: "30px", marginLeft: "20%", marginRight: "20%" }}
        >
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </div>

        <div
          className="form-group"
          style={{ marginLeft: "20%", marginRight: "20%" }}
        >
          <label>Priority</label>
          <div
            className="row justify-content-md-center"
            style={{ display: "flex" }}
          >
            <div className="col col-lg-2">
              <input
                type="radio"
                id="low"
                name="priority"
                value="low"
                onClick={handleChange}
              />
              <label for="low" style={{ marginLeft: "10px" }}>
                Low
              </label>
            </div>
            <br></br>
            <div className="col col-lg-2">
              <input
                type="radio"
                id="medium"
                name="priority"
                value="medium"
                onClick={handleChange}
              />
              <label for="medium" style={{ marginLeft: "10px" }}>
                Medium
              </label>
            </div>
            <br></br>
            <div className="col col-lg-2">
              <input
                type="radio"
                id="high"
                name="priority"
                value="high"
                onClick={handleChange}
              />
              <label for="high" style={{ marginLeft: "10px" }}>
                High
              </label>
            </div>
            <br></br>
          </div>
        </div>

        <div
          className="form-group"
          style={{ marginLeft: "20%", marginRight: "20%" }}
        >
          <label>Deadline</label>
          <input
            type="date"
            className="form-control"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: "20%", marginRight: "auto" }}
        >
          Create
        </button>
      </form>
    </Form>
  );
};

export default TaskForm;
