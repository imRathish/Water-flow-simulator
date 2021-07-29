import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { updateRows, updateColumns, updateObstructions } from '../store/simulator/action'

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});



export default function Step1(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { setCurrentStep } = props;
  const {rows, columns, obstructions} = useSelector(({simulator})=> simulator);

  const handleChange = (event, value) => {
    const id = event.target.id;
    console.log(event.target.id, value)
    if (id === "rows-slider") {
      dispatch(updateRows(value))

    } else if (id === "columns-slider") {
      dispatch(updateColumns(value))

    } else if (id === "obstruction-slider")
      dispatch(updateObstructions(value))
  }
  const handleNext = () => {
    setCurrentStep(1);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item>
        <Typography id="create-grid" variant="h6" gutterBottom>
            Grid Creation
          </Typography>
        </Grid>
        <Grid item >
          <Typography id="rows-slider-label" gutterBottom>
            Number of rows
          </Typography>
          <Slider
            value={rows}
            id="rows-slider"
            defaultValue={rows}
            aria-labelledby="rows-slider-label"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Typography id="columns-slider-label" gutterBottom>
            Number of columns
          </Typography>
          <Slider
            value={columns}
            id="columns-slider"
            defaultValue={columns}
            aria-labelledby="columns-slider-label"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>

          <Typography id="obstruction-slider-label" gutterBottom>
            Number of obstruction
          </Typography>
          <Slider
            value={obstructions}
            id="obstruction-slider"
            defaultValue={obstructions}
            aria-labelledby="obstruction-slider-label"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>

        </Grid>
      </Grid>
    </div>
  );
}