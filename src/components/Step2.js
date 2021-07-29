import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Obstacle from './Obstacle/ObstacleContainer';
import GridMatrix from './Grid';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ObstacleContainer from './Obstacle/ObstacleContainer';
import { updateStartPoint, resetUsedObstruction } from '../store/simulator/action';
const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});


export default function Step2(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { obstructions, usedObstructions, startPoint } = useSelector(({ simulator }) => simulator);
    const [isSimulate, setIsSimulate] = useState(false);
    const { setCurrentStep } = props;
    
    const handleBack = () => {
        if(isSimulate){
            setIsSimulate(false);
            resetStartPoint();
            return;
        }
        setCurrentStep(0);
    }
    const handleStartSimulation = () => {
        setIsSimulate(true)
    }
    const resetStartPoint = () => {
        dispatch(updateStartPoint({x:-1, y:-1}));
    }
    const resetObstacles = () => {
        dispatch(resetUsedObstruction());
    }
    return (
            <DndProvider backend={HTML5Backend}>
                 
                <Grid container spacing={3} justify="center">
                    <Grid item md={12}>
                    <Typography id="create-grid" align="center" gutterBottom>
                        {isSimulate?"Select the workflow start point by clicking on any of the blue box":"Drag the obstruction and place it inside the grid (white boxes)"}
                    </Typography>
                    </Grid>
                    <Grid item>
                        <GridMatrix {...props} isSimulate={isSimulate} />
                    </Grid>
                    {!isSimulate && 
                     <Grid item>
                     <ObstacleContainer usedObstructions={usedObstructions}/>
                 </Grid>
                    }
                   
                    <Grid item container spacing={2} justify="center">
                        <Grid item>
                            <Button size="small" variant="outlined" color="secondary" onClick={handleBack}>Back</Button>

                        </Grid>
                       
                        {isSimulate &&
                            <Grid item>
                            <Button disabled={!startPoint || startPoint.x===-1 || startPoint.y===-1} size="small" variant="contained" color="secondary" onClick={resetStartPoint}>Reset start point</Button>

                            </Grid>
                        }
                          {!isSimulate && <Grid item>
                            <Button  disabled={usedObstructions.length===0} size="small" variant="outlined" color="secondary" onClick={resetObstacles}>Reset Obstacles</Button>

                        </Grid>
                        }
                        {!isSimulate && <Grid item>
                            <Button disabled={usedObstructions.length===0} size="small" variant="contained" color="primary" onClick={handleStartSimulation}>Start simulation</Button>

                        </Grid>
                        }
                      


                    </Grid>
                </Grid>
            </DndProvider>
    )
}