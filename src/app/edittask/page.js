"use client";
import Todo from '../components/Todo';
import React from 'react'
import {useState} from 'react';
import Arrow from 'public/icons/arrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import taskIcon from "public/icons/task.svg";



function EditTaskPage() {
  const [taskInput, setTaskInput] = useState("")
const [listTask, setListTask] = useState(["Teste", "Teste2"])

const router = useRouter()

const onClick = () => {
  router.push('/')

}

const add = () => {
  setListTask(listTask=>[...listTask, taskInput])
  setTaskInput("")
}


function todo(){
  listTask.map((item, index) => ( <Todo index={index} key={index} todo={item} />)
  )}

  return (
    <div className='App'>

      
<row className="top-bar">
<Image className='button-back' src={Arrow} onClick={onClick}/>
</row>    
  <row className="top-bar-title">
  <h4>Edit Task</h4>
    </row>    
      

      
      
      
      
      <div className='task-read'>  
      <h3>Task title</h3>
      <row className="input">
      <Image className="task-icon" src={taskIcon}/>
      <input placeholder='Daily Workout' value={taskInput} onInput={(e)=>{setTaskInput(e.target.value)}}/></row>
      </div> 
      
      <button type="button" className='creat-task2' onClick={add}
      >Edit task</button>
      
        
       


    </div>
  )
}

export default EditTaskPage