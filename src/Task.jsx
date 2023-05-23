import React from 'react';
import {RxCross2} from "react-icons/rx";

export const Task = (props) => {
    return (
        <div className='bg-blue task' style = {{backgroundColor : props.completed ? "blue" : "gray"}}>
            <h1>{props.taskName}</h1>
            <button className='' onClick={()=>props.completeTask(props.id)}>Complete</button>
            <button className = "" onClick={() => props.deleteTask(props.id)}><RxCross2 /></button>
        </div>
    )
}
