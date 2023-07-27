"use client";
import CreateTaskPage from '../createtask/page';
import React, { useState } from 'react';





function Todo({todo}) {

  function deleteTask(index){
    setListTask(listTask.filter((item, i)=>index !== i))
  }

  const [isCheck, setIsCheck] = useState(false);

  const handleOnChange = () => {
    setIsCheck(!isCheck);
  };

  return (
    <div className="todo">
    <div className="content">
 
    <div className='task'>
    <input className='Checkbox' type='checkbox' id='topping' value='Panner' checked={isCheck} onChange={handleOnChange}></input> 
    {todo.text}
    <button onClick={deleteTask}>{'x'}</button>
    <button>{'>'}</button>
      
        </div>
       </div>
       </div>
  )
}

export default Todo;
