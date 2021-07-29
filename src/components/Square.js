import React, { useEffect, useState } from 'react'
import {useDrop}  from 'react-dnd';
import {insertObstacle, simulateFlow, updateStartPoint} from '../store/simulator/action';
import {useDispatch, useSelector} from 'react-redux'
export default function Square(props) {
    const {value, x, y, isStartPoint, isSimulate} = props;
    const dispatch = useDispatch();
    const { rows, columns, obstructions, startPoint, grid } = useSelector(({ simulator }) => simulator);

    const [hoverState, setHoverState] = useState(false);

    const handleSimulate = () => {
        if(isStartPoint && isSimulate && (startPoint===null || (startPoint && startPoint.x===-1 && startPoint.y===-1 ))){
            dispatch(updateStartPoint({x:x,y}))
        }
        
    }
    useEffect(()=>{
        if(startPoint){
            dispatch(simulateFlow());
        }
    },[startPoint]);

    let squareColor = "white";
    if(value===0){
        squareColor = "white"
    }else if (value === -1){
        squareColor = "black"
    }else if(value === 1){
        squareColor = "lightblue"
    }else{
        squareColor = "black"
    }
    const [collectedProps, drop] = useDrop(() => ({
        accept:["OBSTACLE"],
        drop: (props, monitor) => {
            if(monitor.didDrop()){
                return 
            }
            const item = monitor.getItem()
            console.log(item);
            dispatch(insertObstacle(x, y, item.value))
        },
        collect: monitor => {{
            isOver: monitor.isOver()
        }}
      }))
      console.log(collectedProps)
      const mouseEnterHandler = () => {
        setHoverState(true);
      }
      const mouseLeaveHandler = () => {
        setHoverState(false);
      }
    return (
        <div
             ref={drop}
            style={{
                backgroundColor: isStartPoint?"blue":squareColor,
                cursor:isStartPoint && isSimulate?"pointer":"default",
                opacity: (isStartPoint && hoverState && isSimulate)?0.5:1,
                color: squareColor,
                width: '100%',
                height: '100%',
                borderStyle: "solid",
                borderWidth: 0.5,
                borderColor: "black",
            }}
            onClick={handleSimulate}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            {""}
        </div>
    );
}