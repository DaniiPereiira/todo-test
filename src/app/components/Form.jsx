import React, { useState } from 'react'

function Form(addTodo) {

  const [value, setValue] = useState("");

  const handForm = async (e) => {
    e.proventDefalt();
    if(!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <div className='From'> 
      <button> Voltar </button>
      <h2>Create Task</h2>
    <form onSubmit={handForm}>
     <input type='text' placeholder='Type here' value={value}> </input>
     </form>
     <button  className='creat-task' type='submit'>Create Taks</button>
     </div>
  
  )
}

export default Form
