export const UPDATE_NO_OF_ROWS = "UPDATE_NO_OF_ROWS";
export const UPDATE_NO_OF_COLUMNS = "UPDATE_NO_OF_COLUMNS";
export const UPDATE_NO_OF_OBSTRUCTIONS = "UPDATE_NO_OF_OBSTRUCTIONS";
export const UPDATE_NO_OF_STARTPOINT = "UPDATE_NO_OF_STARTPOINT";
export const UPDATE_GRID = "UPDATE_GRID";
export const INSERT_OBSTACLE = "INSERT_OBSTACLE";
export const RESET = "RESET";
export const SIMULATEFLOW = "SIMULATEFLOW";
export const RESET_USED_OBSTRUCTION = "RESET_USED_OBSTRUCTION";
export const UPDATE_CELL = "UPDATE_CELL";

export const updateRows = (newRows) => {
  return { type: UPDATE_NO_OF_ROWS, rows: newRows };
};
export const updateColumns = (newColumns) => {
  return { type: UPDATE_NO_OF_COLUMNS, columns: newColumns };
};
export const updateObstructions = (newObstructions) => {
  return { type: UPDATE_NO_OF_OBSTRUCTIONS, obstructions: newObstructions };
};
export const resetUsedObstruction = () => {
  return { type: RESET_USED_OBSTRUCTION };
};
export const updateStartPoint = (newStartPoint) => {
  return { type: UPDATE_NO_OF_STARTPOINT, startPoint: newStartPoint };
};
export const insertObstacle = (x, y, obstructionId) => {
  return { type: INSERT_OBSTACLE, x, y, obstructionId: obstructionId };
};
export const updateGrid = (newGrid) => {
  return { type: UPDATE_GRID, grid: newGrid };
};
export const simulateFlow = () => {
  return { type: SIMULATEFLOW };
};
export const updateCell = (x, y, value) => {
  return { type: UPDATE_CELL, x, y, value };
};
