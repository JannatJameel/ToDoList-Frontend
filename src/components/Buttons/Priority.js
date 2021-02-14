import { updateTask } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const Priority = ({ taskId, passed }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks).find(
    (task) => task.id === taskId
  );

  const [level, setLevel] = useState(task.priority);
  const changePriority =
    task.priority === "low"
      ? "medium"
      : task.priority === "medium"
      ? "high"
      : "low";
  const handleChange = (event) => {
    dispatch(
      updateTask({
        ...task,
        priority: changePriority,
      })
    );
    setLevel(changePriority);
  };
  return (
    <>
      <Button disabled = {passed} value={level} style={{width: "6em", height: "2.5em"}} variant="contained" onClick={() => handleChange()}>
        {level}
      </Button>
    </>
  );
};

export default Priority;
