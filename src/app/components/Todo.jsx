"use client";
import CreateTaskPage from '../createtask/page';
import React, { useState } from 'react';
import {setTaskInput} from "../createtask/page"
import {iconInput} from "public/icons/task.svg"
import Image from 'next/image'
import iconDelete from "public/icons/x.svg"
import iconEdit from "public/icons/next.svg"
import { useRouter } from 'next/navigation';






function Todo({todo}) {

  const router = useRouter()

  const goToEdit = () => {
  router.push('/edittask')
}

  function deleteTask(index){
    setListTask(listTask.filter((item, i)=>index !== i))
  }

  const [isCheck, setIsCheck] = useState(false);

  const handleOnChange = () => {
    setIsCheck(!isCheck);
    
  };

  function countSelect () {
    var checkBoxes = document.querySelectorAll(".Checkbox")
    var selecionados = 0
    checkBoxes.forEach(function(el) {
      
      if(isCheck) {
          selecionados++;
      }
  
     
     
    });
    
    return selecionados
  }

 


  


  return (
    <div className="todo">
     
    <div className="content">
 
    <div className='task'>
    <input className='Checkbox' type='checkbox' id='topping' value='Panner' checked={isCheck} onChange={handleOnChange}/>
     
    
      
    <Image className="icondelete" src={iconDelete} onClick={deleteTask} />
    <Image className='iconEit' src={iconEdit} onClick={goToEdit}  />
      
        </div>
       </div>
       </div>
  )
}

export default Todo;
