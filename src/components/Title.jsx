import React from 'react';
import './Style.css';
import taskissLogo from '../taskissLogo.png';
import {Link} from 'react-router-dom'
import "../fonts/Ubuntu-Bold.ttf";
import "../fonts/Ubuntu-Light.ttf";


export default function Title() {

  return (
    <div id='header'>
        <img className='logo' src={taskissLogo} alt="Logo" Link to='/'/>
        <div className='meital'>By Meital Babay</div> 
    </div>
  )
}
