import { useSelector } from "react-redux";
import AddButton from "./Buttons/AddButton";
//table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
  const tasks = useSelector((state) => state.unfinishedTasks);
  const taskList = tasks.map((task) => <Task task={task} key={task.id} />);
  console.log(taskList);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{taskList}</TableBody>
        <AddButton />
      </Table>
    </TableContainer>
  );
};

export default UnfinishedTasks;
