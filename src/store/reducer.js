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
        unfinishedTasks: state.unfinishedTasks.filter((task) => task.id !== action.payload.taskId), 
        finishedTasks: state.finishedTasks.filter((task) => task.id !== action.payload.taskId)
      };
    case "CREATE_TASK":
      const { newTask } = action.payload;
      return {
        ...state,
        unfinishedTasks: [...state.unfinishedTasks, newTask],
      };
    case "UPDATE_TASK":
      const { updatesTask } = action.payload;
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
