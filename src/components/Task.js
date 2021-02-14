// Components
import Priority from "./Buttons/Priority";
import DeleteButton from "./Buttons/DeleteButton";
import CheckBox from "./Buttons/CheckBox";
// Table
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const Task = ({ task }) => {
  const days =
    (new Date(task.deadline).getTime() - new Date().getTime()) / 86400000;
  const time = (days % 1) * 24;

  let passed = days<=0;

  return (
    <TableRow key={task.name}>
      <TableCell component="th" scope="row">
        {task.name}
      </TableCell>
      <TableCell align="right">
        <CheckBox taskId={task.id} status={task.status} passed={passed}/>
      </TableCell>
      <TableCell>
        due in {(days <= 0)? 0 : Math.ceil(days)} days
      </TableCell>
      <TableCell align="right">
        <DeleteButton taskId={task.id} passed={passed}/>
      </TableCell>
      <TableCell align="right">
        <Priority taskId={task.id} passed={passed}/>
      </TableCell>
    </TableRow>
  );
};

export default Task;
