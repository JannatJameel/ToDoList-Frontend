import { useState } from "react";

// Components
import Priority from "./Priority";
import DeleteButton from "./Buttons/DeleteButton";
import Checkbox from "./Buttons/Checkbox";

import { makeStyles } from "@material-ui/core/styles";

// Table
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Task = ({ task }) => {
  console.log(task.deadline);
  const days = ( new Date(task.deadline).getTime() - (new Date().getTime()) ) / 86400000;
  const time = (days % 1) * 24;




  return (
    <TableRow key={task.name}>
      <TableCell component="th" scope="row">
        {task.name}
      </TableCell>
      <TableCell align="right">
      <CheckBox/>
      </TableCell>
      <TableCell>
        days {Math.floor(days)} hours {Math.floor(time)}
      </TableCell>
      <TableCell align="right">
        <DeleteButton taskId={task.id}/>
      </TableCell>
      <TableCell align="right">
        <Priority />
      </TableCell>
    </TableRow>
  );
};

export default Task;
