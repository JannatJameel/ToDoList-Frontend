import slugify from "react-slugify";

const initialState = {
  unfinishedTasks: [],
  finishedTasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return {
        ...state,
        unfinishedTasks: action.payload.tasks.filter((task) => !task.status),
        finishedTasks: action.payload.tasks.filter((task) => task.status),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    case "CREATE_TASK":
      const { newTask } = action.payload;
      newTask.id = state.tasks[state.tasks.length - 1].id + 1;
      newTask.slug = slugify(newTask.name);

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case "UPDATE_TASK":
      const { updatesTask } = action.payload;
      updatesTask.slug = slugify(updatesTask.name);
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatesTask.id ? updatesTask : task
        ),
      };

    default:
      return state;
  }
};

export default reducer;
