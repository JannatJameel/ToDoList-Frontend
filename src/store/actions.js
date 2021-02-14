import axios from "axios";

export const FETCH_TASKS = "FETCH_TASKS";

export const fetchTasks = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("http://localhost:8000/tasks");
            dispatch({
                type: FETCH_TASKS, 
                payload: {tasks: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};