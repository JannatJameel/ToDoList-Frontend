import Checkbox from "@material-ui/core/Checkbox";

import { UpdateTask } from "../../store/actions";
import { useDispatch } from "react-redux";

const CheckBox = () => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
        />
    );
};

export default CheckBox;
