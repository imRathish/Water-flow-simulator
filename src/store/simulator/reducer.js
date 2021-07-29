import { UPDATE_NO_OF_ROWS, UPDATE_NO_OF_COLUMNS, UPDATE_NO_OF_OBSTRUCTIONS, RESET_USED_OBSTRUCTION, UPDATE_NO_OF_STARTPOINT, INSERT_OBSTACLE, UPDATE_GRID, SIMULATEFLOW } from './action';
import {simulateWaterFlow} from './util'
const initialState = {
    rows: 1,
    columns: 1,
    obstructions: 1,
    usedObstructions:[],
    startPoint: null,
    grid: null
}

export default function simulatorReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_NO_OF_ROWS: {
            return {
                ...state,
                rows: action.rows
            }
        }
        case UPDATE_NO_OF_COLUMNS: {
            return {
                ...state,
                columns: action.columns
            }
        }
        case UPDATE_NO_OF_OBSTRUCTIONS: {
            return {
                ...state,
                obstructions: action.obstructions
            }
        }
        case RESET_USED_OBSTRUCTION: {
            let newGrid = state.grid;
            for(let i=0;i<state.rows+1;i++){
                for(let j=0;j<state.columns;j++){
                    if(newGrid[i][j] === -1){
                        newGrid[i][j] = 0
                    }
                }
            }
            return {
                ...state,
                grid: newGrid,
                usedObstructions: []
            }
        }
        case UPDATE_NO_OF_STARTPOINT: {
            return {
                ...state,
                startPoint: action.startPoint
            }
        }
        case UPDATE_GRID: {
            return {
                ...state,
                grid: action.grid,
                usedObstructions:[]
            }
        }
        case INSERT_OBSTACLE: {
            let grid = state.grid;
            grid[action.x][action.y] = -1
            return {
                ...state,
                usedObstructions: state.usedObstructions.concat(action.obstructionId),
                grid: grid
            }
        }
        case SIMULATEFLOW: {
            console.log(action.startPoint);
            let newGrid = state.grid;
            if(state.startPoint.x === -1 && state.startPoint.y === -1){
                for(let i=0;i<state.rows+1;i++){
                    for(let j=0;j<state.columns;j++){
                        if(newGrid[i][j] === 1){
                            newGrid[i][j] = 0
                        }
                    }
                }
                return  {
                    ...state,
                    grid: newGrid
                }
            }
            newGrid = simulateWaterFlow(state.grid, state.startPoint);
            console.log(newGrid);
            return {
                ...state,
                grid: newGrid
            }
        }
        default:
            return state;
    }
}