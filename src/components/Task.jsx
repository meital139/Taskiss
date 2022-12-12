import React,{useState} from 'react';
import './Style.css';
import "../fonts/Ubuntu-Bold.ttf";
import "../fonts/Ubuntu-Light.ttf";import moment from 'moment';

export default function Task(props) {
  const[taskStyle,setTaskStyle] = useState('taskStyle1');
  const[check,setCheck] = useState(true);

  const checking=()=>{
    setCheck(!check);
    // console.log(check);
    if(check===true){
      setTaskStyle('taskStyle2');
    }
    else{
      setTaskStyle('taskStyle1');
    }
  }

  const removeTask=(index)=>{
    props.remove(index);
    return true;
  }

  return (
    <div className='taskDiv' style={{background: "rgba(74, 126, 205, 0.3)"}}>
        <p className={taskStyle} style={{fontFamily: "bold", fontSize: "25px", color:"darkBlue",textShadow:"3px 3px 4px white"}}>{props.taskName}</p>
        <p className={taskStyle}>Details:{props.taskDetails}</p>
        <p className={taskStyle}>Task Due Time is: {moment(new Date(props.taskTime)).format("D MMM YYYY -  HH:mm:ss")}</p>

        <p className={taskStyle}>Task finish time in:</p>
        <p className={taskStyle}>{props.taskEndTime[0]} Days</p>
        <p className={taskStyle}>{props.taskEndTime[1]} Hours</p>
        <p className={taskStyle}>{props.taskEndTime[2]} Minutes</p>

        <input className='checkBox' type="checkbox" onClick={checking}/>
        <button className='removeBtn' onClick={removeTask}>Remove</button>
    </div>
  )
}
