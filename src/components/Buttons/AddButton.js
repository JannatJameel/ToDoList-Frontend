import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const AddButton = (props) => {
  return (
    <Link to="/form">
      <Button variant="contained" color="primary">
        Add Task
      </Button>
    </Link>
  );
};

export default AddButton;
