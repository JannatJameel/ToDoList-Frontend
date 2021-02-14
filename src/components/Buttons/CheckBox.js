import Checkbox from "@material-ui/core/Checkbox";

import { updateTask } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CheckBox = ({ taskId, status, passed }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks).find(
    (task) => task.id === taskId
  );
  const [checked, setChecked] = useState(status);

  const handleChange = (event) => {
    setChecked(!status);
    dispatch(updateTask({ ...task, status: !status }));
  };
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
      disabled = {passed}
    />
  );
};

export default CheckBox;
