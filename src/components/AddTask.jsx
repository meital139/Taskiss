import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import "../fonts/Ubuntu-Bold.ttf";
import "../fonts/Ubuntu-Light.ttf";
import DateTimePicker from 'react-datetime-picker';

export default function AddTask(props) {
  const[task,setNewTask] = useState('');
  const[details,setDetails] = useState('');
  const[time,setTime] = useState(new Date());
  const timeLeft = Math.abs ((new Date()) - time) ;

  // const [timeToEnd, setTimeToEnd] = useState [days, hours, minutes];

  let days = timeLeft / (24*60*60*1000);
  let hours = (days % 1) * 24;
  let minutes = (hours % 1) * 60;
    [days, hours, minutes] = [Math.floor(days), Math.floor(hours), Math.floor(minutes)];
  
  const timeToEnd = [days, hours, minutes];

  // if(new Date() > time){
  //   days= 'task passed time!';
  //   hours='task passed time!';
  //   minutes='task passed time!';
  // }

    const validTask=()=>{
      if(task.length>0){
        props.add(task,details,time,timeToEnd);
        console.log(timeLeft);
        return true
      }
      else{
        alert('Task too short!')
        return false
      }
    }

  return (
    <div className='addDiv'>
        <input className='addInpt' onChange={(element)=>{setNewTask(element.target.value)}}type="text" id="newTask" placeholder="My new task"></input><br/>
        <input className='detailsInpt' onChange={(element)=>{setDetails(element.target.value)}}type="text" id="details" placeholder="Task's details"></input>
        <div className='timePicker'>
        <p className='dueTimeP'>Due date & Time:</p>
            <DateTimePicker onChange={setTime} value={time} minDate={new Date()} />
          </div>

        <Link to='/tasks'><button className='addBtn' onClick={validTask}>Add Task</button></Link>
    </div>
  )
}
