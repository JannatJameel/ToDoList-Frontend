import axios from "axios";

export const FETCH_TASKS = "FETCH_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      console.log(res);
      dispatch({
        type: FETCH_TASKS,
        payload: { tasks: res.data },
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/tasks`, newTask);
      dispatch({
        type: CREATE_TASK,
        payload: { newTask: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (updatedTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/tasks/${updatedTask.id}`,
        updatedTask
      );
      dispatch({
        type: UPDATE_TASK,
        payload: { updatedTask },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
