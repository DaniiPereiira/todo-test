import React from 'react'

function EditForm() {
  return (
    <div className='EditFrom'> 
    <button> Voltar </button>
    <h2>Edit Task</h2>
  <form>
   <input type='text' placeholder='Type here'> </input>
   </form>
   <button type='submit'>Edit Taks</button>
   </div>
  )
}

export default EditForm