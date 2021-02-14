import { useSelector } from "react-redux";
import AddButton from "./Buttons/AddButton";
//table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// Components
import Task from "./Task";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const UnfinishedTasks = () => {
  const classes = useStyles();
  const tasks = useSelector((state) => state.tasks);
  const taskList = tasks
    .filter((task) => !task.status)
    .map((task) => <Task task={task} key={task.id} />);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>Unfinished Tasks</TableHead>
        <TableBody>{taskList}</TableBody>
        <AddButton />
      </Table>
    </TableContainer>
  );
};

export default UnfinishedTasks;
