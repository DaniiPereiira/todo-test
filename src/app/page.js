"use client";
import React from 'react';
import Image from 'next/image'
import {useState} from "react";
import imagePerfil from "public/eu.jpg"
import Todo from './components/Todo';
import { useRouter } from 'next/navigation';
import {todo} from "./createtask/page"


function HomePage() {

  var dayWeek = new Date().getDay();
  const now = new Date;
  const date = now.getDate();
  var mon = now.getMonth();
  const year = now.getFullYear();
  

  const[days, setDays] = useState( ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
  const [monName, setMonName] = useState( ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
  const router = useRouter()

  const onClick = () => {
  router.push('/createtask')
}

const [todos, setTodos] = useState([
  {
    id: 1,
    text: "Texto 1",
    
  },
  {
    id: 2,
    text: "Texto 2",
    
   
  }]);

  return (
    <div className="App">
     
      <div className='group1'>
        <today className='today'>
        <p className='today-day'>{days[dayWeek]}</p>
        <p className='today-date'>{date} {monName[mon]} {year}</p></today>
        <Image className='img' width={50} height={50}
        src={imagePerfil} alt='Perfil'/>
        </div>
        <div className='goup3'>
          <h2>Task List</h2>
          <count className='count'>Task finished</count>
          </div>
       
        <div className='todo-list'>{todos.map((todo) => ( <Todo key={todo.id} todo={todo} />))}
        <button type="button" className='creat-task' onClick={onClick}
       
        >Create task</button>
        </div>
        
        
     </div>
    
  );
      }
     


export default HomePage;
