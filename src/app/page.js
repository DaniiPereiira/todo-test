"use client";
import React from 'react';
import {todo} from './createtask/page';
import Image from 'next/image'
import {useState} from "react";

import Link from 'next/link';


// import {imgPerfil} from '../images/eu.jpg';



function HomePage() {

  var dayWeek = new Date().getDay();
  const now = new Date;
  const date = now.getDate();
  var mon = now.getMonth();
  const year = now.getFullYear();
  

  const[days, setDays] = useState( ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
  const [monName, setMonName] = useState( ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);



  return (
    <div className="App">
     
      <div className='group1'>
        <today className='today'>
        <p className='today-day'>{days[dayWeek]}</p>
        <p className='today-date'>{date} {monName[mon]} {year}</p></today>
        <image className='img'><img src='./images/eu.jpg' alt='Perfil'/>
        </image>
        </div>
        <div className='goup3'>
          <h2>Task List</h2>
          <count className='count'>Task finished</count>
          </div>
       
        <div className='todo-list'>{todo}
        <button type="button" className='creat-task' onClick={<Link></Link>}
       
        >Create task</button>
        </div>
        
        
     </div>
    
  );
      }
     


export default HomePage;
