import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteTask } from "../../store/actions";
import { useDispatch } from "react-redux";

const DeleteButton = ({taskId}) => {
    const dispatch = useDispatch();
    console.log(taskId);
    return (
        <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            style={{ float: "right" }}
            onClick={() => dispatch(deleteTask(taskId))}
        />
    );
};

export default DeleteButton;
