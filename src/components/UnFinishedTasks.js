import { useSelector } from "react-redux";
// Components
import Task from "./Task";

const UnfinishedTasks = () => {
    const tasks = useSelector(state => state.unfinishedTasks);
    const taskList = tasks.map(task => <Task task={task}/>)

    return (
        <>
            {taskList}
        </>
    );
};

export default UnfinishedTasks;