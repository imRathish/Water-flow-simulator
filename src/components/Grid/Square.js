import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import {
  insertObstacle,
  simulateFlow,
  updateStartPoint,
  updateCell,
} from "../../store/simulator/action";
import { useDispatch, useSelector } from "react-redux";
import { simulateWaterFlow } from "../../store/simulator/util";

export default function Square(props) {
  const { value, x, y, isStartPoint, isSimulate } = props;
  const dispatch = useDispatch();
  const { startPoint } = useSelector(({ simulator }) => simulator);

  const [hoverState, setHoverState] = useState(false);

  const handleSimulate = () => {
    if (
      isStartPoint &&
      isSimulate &&
      (startPoint === null ||
        (startPoint && startPoint.x === -1 && startPoint.y === -1))
    ) {
      dispatch(updateStartPoint({ x: x, y }));
    }
  };
  useEffect(() => {
    if (startPoint) {
        console.log(startPoint)
      // const simulatedGrid = simulateWaterFlow(grid, startPoint)
      // for(let i=0;i<rows+1;i++){
      //     setTimeout(()=>{
      //         for(let j=0;j<columns;j++){
      //             if(simulatedGrid[i][j]===1){
      //                 dispatch(updateCell(i,j,1))
      //             }
      //         }
      //     },1000)

      // }
      dispatch(simulateFlow());
    }
  }, [startPoint]);

  const computeBGColour = () => {
    if (value === 1) {
        return "#2B78E3";
      }
    if (isStartPoint) {
      return "#cadef9";
    }
    if (isOver && value === 0) {
      return "lightgreen";
    }
    if (value === -1) {
      return "black";
    }
   

    return "white";
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ["OBSTACLE"],
    drop: (props, monitor) => {
      if (monitor.didDrop()) {
        return;
      }
      const item = monitor.getItem();
      console.log(item);
      dispatch(insertObstacle(x, y, item.value));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const mouseEnterHandler = () => {
    setHoverState(true);
  };

  const mouseLeaveHandler = () => {
    setHoverState(false);
  };

  return (
    <div
      ref={(!isStartPoint && value !== -1) ? drop : null}
      style={{
        backgroundColor: computeBGColour(), //StartPoint ? "blue" : isOver ? "green" : squareColor,
        cursor: isStartPoint && isSimulate ? "pointer" : "default",
        opacity: isStartPoint && hoverState && isSimulate ? 0.5 : 1,
        width: "100%",
        height: "100%",
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
