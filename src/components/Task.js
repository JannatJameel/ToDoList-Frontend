import { useState } from "react";

// Components
import Priority from "./Priority";

// Styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const Task = ({task}) => {
    const classes = useStyles();

    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Typography variant="h5" component="h2">
                    {task}
                </Typography>
                <Priority />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    style={{float: "right"}}
                    >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
};

export default Task;