// Components
import Priority from "./Buttons/Priority";
import DeleteButton from "./Buttons/DeleteButton";
import CheckBox from "./Buttons/CheckBox";
// Table
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

//styling
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { orange, purple, green, indigo, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: indigo[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[400],
    },
  },
});

const Task = ({ task }) => {
  const days =
    (new Date(task.deadline).getTime() - new Date().getTime()) / 86400000;
  const time = (days % 1) * 24;

  let passed = Math.ceil(days) <= 0;

  return (
    <ThemeProvider theme={theme}>
      <TableRow key={task.name}>
        <TableCell component="th" scope="row">
          {task.name}
        </TableCell>
        <TableCell align="right">
          <CheckBox
            taskId={task.id}
            status={task.status}
            passed={passed}
            color="primary"
          />
        </TableCell>
        <TableCell>
          due in {days < 0 ? 0 : Math.ceil(days)} day
          {Math.ceil(days) !== 1 ? "s" : null}
        </TableCell>
        <TableCell align="right">
          <DeleteButton taskId={task.id} passed={passed} color="primary" />
        </TableCell>
        <TableCell align="right">
          <Priority taskId={task.id} passed={passed} color="primary" />
        </TableCell>
      </TableRow>
    </ThemeProvider>
  );
};

export default Task;
