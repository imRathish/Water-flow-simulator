import React from 'react'
import {useDrag}  from 'react-dnd';
export default function Obstacle(props) {
    const {value} = props;
   const [{isDragging}, drag] = useDrag({
       type: "OBSTACLE",
       item: {type: "OBSTACLE", value: value},
       collect: monitor => ({
           isDragging: !!monitor.isDragging()
       })
   });
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging?0.5:1,
                cursor: "grab",
                backgroundColor: "black",
                width: '20px',
                height: '20px',
                borderStyle: "solid",
                borderWidth: 0.5,
                borderColor: "black",
                margin:5
            }}
        >
            {value}
        </div>
    );
}