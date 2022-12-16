import React from 'react';
import {Link} from 'react-router-dom'
import './Style.css';
import "../fonts/Ubuntu-Bold.ttf";
import "../fonts/Ubuntu-Light.ttf";

export default function Menu() {
  return (
    <div className='menu'>
      <ul className='navUl'>
        <Link to='/'><li className='navLi' >Home Page</li></Link>
        <Link to='/tasks'><li className='navLi'>All Tasks</li></Link>
        <Link to='/add-task'><li className='navLi'>Add New Task</li></Link>
        <Link to='/about-Meital'><li className='navLi'>About Meital</li></Link>
      </ul>
    </div>
  )
}