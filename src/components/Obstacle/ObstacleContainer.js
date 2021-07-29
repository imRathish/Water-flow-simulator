import React from "react";
import { useSelector } from "react-redux";
import Obstacle from "./Obstacle";

export default function ObstacleContainer() {
  const { obstructions, usedObstructions } = useSelector(
    ({ simulator }) => simulator
  );
  let obstruction_array = [];

  if (obstructions) {
    for (let i = 1; i <= obstructions; i++) {
      if (!usedObstructions.includes(i)) {
        obstruction_array.push(i);
      }
    }
  }

  let squares = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      squares.push();
    }
  }

  return (
    <div>
      {obstruction_array.map((index) => {
        return (
          <div
            key={"Obstruction-" + index}
            style={{ width: 100 / 2 + "%", height: 100 / 5 + "%" }}
          >
            <Obstacle key={index} value={index} />
          </div>
        );
      })}
    </div>
  );
}
