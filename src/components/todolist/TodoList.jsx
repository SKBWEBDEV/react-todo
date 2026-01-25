import React, { useState } from 'react'

const TodoList = () => {

  const [todo,setTodo] = useState ("")
  const [list,setList] = useState ([])
  


  const handleChange = (e) => {
    setTodo(e.target.value);
    
  }


  const handleClick = () => {

    if (todo === "") {
      return
    }
    setList([...list,todo])
    setTodo("")
  }


  const handleRemove = (index)=> {
    console.log('remove');
    console.log(index);
    
   
  }

  return (
    <div>

      <div className='flex h-screen items-center justify-center gap-10 relative'>
        <input
        value={todo}
        onChange={handleChange}
        type="text" placeholder='todolist' className='border text-center px-5 py-2 rounded-lg'/>
        <button
        onClick={handleClick}
        className='border px-8 py-2.5 cursor-pointer rounded-lg'>Create Todo List</button> <br />
        
      </div>

      <div className='absolute text-center bottom-50 left-[50%]'>
        {
          list.map ((item,index)=> (
            
            <div className='flex items-center gap-8'>
              <p key={index}>{item}</p>
              <button
              key={index}
              onClick={handleRemove}
              className='border px-8 py-1 cursor-pointer rounded-lg'>remove</button>
            </div>
          ))
        }
      </div>


      
    </div>
  )
}

export default TodoList
