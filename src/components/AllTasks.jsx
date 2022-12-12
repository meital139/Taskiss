import React from 'react';
import Task from './Task';
import './Style.css';
import "../fonts/Ubuntu-Bold.ttf";
import "../fonts/Ubuntu-Light.ttf";

export default function AllTasks(props) {
  return (
    <div className='allTasksDiv'>
        <ul className='taskUl'>
            {props.tasksArr.map((val,i)=>(
                <Task key={i} taskName={val.task} taskDetails={val.details} taskTime={val.time} taskEndTime={val.timeToEnd} index={val.index} remove={props.remove}/>
                )  
            )}
        </ul>
    </div>
  )
}