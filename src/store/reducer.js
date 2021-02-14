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

    default:
      return state;
  }
};

export default reducer;
