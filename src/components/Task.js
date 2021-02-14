import { useState } from "react";

// Components
import Priority from "./Priority";

import { makeStyles } from "@material-ui/core/styles";

//Table
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

//buttons/checkbox
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Task = ({ task }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <TableRow key={task.name}>
      <TableCell component="th" scope="row">
        {task.name}
      </TableCell>
      <TableCell align="right">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          style={{ float: "right" }}
        >
          Delete
        </Button>
      </TableCell>
      <TableCell align="right">
        <Priority />
      </TableCell>
    </TableRow>
  );
};

export default Task;
