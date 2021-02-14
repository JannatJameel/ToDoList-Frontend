const initialState = {
    unfinishedTasks: [],
    finishedTasks: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_TASKS":
            return {
                ...state, 
                unfinishedTasks: action.payload.tasks
            };


    };
}; 

export default reducer;