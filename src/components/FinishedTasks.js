import { useSelector } from "react-redux";
// Components
import Task from "./Task";

const FinishedTasks = () => {
    const tasks = useSelector(state => state.finishedTasks);
    const taskList = tasks.map(task => <Task task={task}/>)
    return (
        <>
        {taskList}
        </>
    );
};

export default FinishedTasks;