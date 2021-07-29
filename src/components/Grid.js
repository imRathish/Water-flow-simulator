import React, { useEffect } from 'react'
import Square from './Square';
import {useSelector, useDispatch} from 'react-redux';
import { updateGrid } from '../store/simulator/action';

export default function Grid(props) {
    const dispatch = useDispatch();
    const {setCurrentStep, isSimulate} = props
    const {rows, columns, obstructions, startPoint, grid} = useSelector(({simulator})=> simulator);
   
    useEffect(()=>{
        let initialGrid = [];
        for(let i=0;i<rows+1;i++){
            initialGrid[i] = [];
            for(let j=0;j<columns;j++){
                initialGrid[i][j] = 0;
            }
        }
        dispatch(updateGrid(initialGrid));
    }, []);
    let squares = [];
    if(grid){
        for(let i=0;i<grid.length;i++){
            let row = grid[i];
            console.log(row)
            for(let j=0;j<row.length;j++){
                squares.push(
                    <div key={i+"-"+j} style={{ width: (100/row.length)+'%', height: (100/grid.length)+'%' }}>
                        <Square value={grid[i][j]} x={i} y={j} isStartPoint={i===0?true:false} isSimulate={isSimulate}/>
                    </div>
                )
            }
        }
    }
    // let squareStartCells = [];
    // if(grid){
    //     for(let j=0;j<grid[0].length;j++){
    //         squareStartCells.push(
    //             <div key={0+"-"+j} style={{ width: (100/grid[0].length)+'%', height: (100/grid.length)+'%'}}>
    //             <Square value={grid[0][j]} x={0} y={j} isStartPoint={true}/>
    //             </div>
    //         )
    //     }
    // }
      
    return (
        <div>
            {/* <div
            style={{
                width: '300px',
                height: '150px',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squareStartCells}
        </div> */}
              <div
            style={{
                width: '300px',
                height: '300px',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
        </div>
      
    );

}