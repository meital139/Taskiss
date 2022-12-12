import React from 'react';
import './Style.css';
import taskissLogo from '../taskissLogo.png';
import "../fonts/Ubuntu-Bold.ttf";
import "../fonts/Ubuntu-Light.ttf";
import moment from 'moment';


export default function Title() {

  return (
    <div id='header'>
        <img className='logo' src={taskissLogo} alt="Logo" />
        {/* <div className='loving'>Loving your Todo's list!</div>
        <div className='meital'>By Meital Babay</div> */}
    </div>
  )
}
