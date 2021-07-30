import React, { useEffect } from "react";
import Square from "./Square";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid } from "../../store/simulator/action";

export default function Grid(props) {
  const dispatch = useDispatch();
  const { isSimulate } = props;
  const { rows, columns, grid } = useSelector(({ simulator }) => simulator);

  useEffect(() => {
    dispatch(updateGrid(initialiseGrid(rows, columns)));
  }, []);

  const initialiseGrid = (rows, columns) => {
    let initialGrid = [];
    for (let i = 0; i < rows + 1; i++) {
      initialGrid[i] = [];
      for (let j = 0; j < columns; j++) {
        initialGrid[i][j] = 0;
      }
    }
    return initialGrid;
  };

  const generateSquares = () => {
    let squares = [];
    if (grid) {
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        console.log(row);
        for (let j = 0; j < row.length; j++) {
          squares.push(
            <div
              key={i + "-" + j}
              style={{
                width: 100 / row.length + "%",
                height: 100 / grid.length + "%",
              }}
            >
              <Square
                value={grid[i][j]}
                x={i}
                y={j}
                isStartPoint={i === 0 ? true : false}
                isSimulate={isSimulate}
              />
            </div>
          );
        }
      }
    }
    return squares;
  };

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {generateSquares()}
    </div>
  );
}
