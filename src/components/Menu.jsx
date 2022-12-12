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
        <Link to='/add-task'><li className='navLi'>Add New Task2222222</li></Link>
      </ul>
    </div>
  )
}