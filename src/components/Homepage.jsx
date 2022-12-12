import React from 'react'
import Clock from 'react-live-clock';
import AllTasks from './AllTasks';
import './Style.css';

export default function Homepage(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return (
        <div>
            <div className='clockDiv'>
                <h2>Today is: {date}</h2>
                <Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'IL/Asia'} />
            </div>
        </div>

  )
}
