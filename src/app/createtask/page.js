"use client";
import Todo from '../components/Todo';
import React from 'react'
import {useState} from 'react';
import Arrow from '../icons/arrow.svg'



function CreateTaskPage() {

const [taskInput, setTaskInput] = useState("")
const [listTask, setListTask] = useState(["Teste", "Teste2"])

const add = () => {
  setListTask(listTask=>[...listTask, taskInput])
  setTaskInput("")
}


function todo(){
  listTask.map((item, index) => ( <Todo index={index} key={index} todo={item} />)
  )}

  return (
    <div className='App'>

      <div className='top-bar'>
      <button className='button-back' src={Arrow}/>
      
      
      <h4>Create Task</h4>
      </div>
      
      {/* <div task-read>  
      <h3>Task title</h3>
      <input value={taskInput} onInput={(e)=>{setTaskInput(e.target.value)}}/>
      </div> 
      <div className='todo-list'>{todo}
      <button type="button" className='creat-task' onClick={add}
      >Create task</button>
      </div>
         */}
       


    </div>
  )
}

export default CreateTaskPage