import React, { useState } from 'react'

const Todo = () => {
    const [inputTask,setInputTask] = useState('')
    const [list,setList] = useState([])

    const  handleChange =(e)=>{
        setInputTask(e.target.value)
    }

    const handleAddTodo = ()=>{
        const newTask = 
        {
            id: Math.random(),
            todo: inputTask
        }
        setList([...list,newTask])
        setInputTask('')
    }

    const handleDeleteTodo = (id)=>{
      const newlist =  list.filter((todo)=>(
            todo.id !== id
        ))
        setList(newlist)
    }


  return (
    <div className='text-center'>
      <h1 className='text-4xl my-5'>Todo App</h1>
      <input type="text" onChange={handleChange} value={inputTask} placeholder='Enter your todo' className=' text-black  p-2 outline w-96'/>
      <button className='bg-orange-500 text-white px-10 py-3 mx-4 rounded-xl' onClick={()=> handleAddTodo(inputTask)}>Add</button>
      <ul className='my-5 gap-4 mx-auto w-[60%]'>
        {
            list.map((todo,index)=>(
                <li className='w-full border-white' key={index}>{todo.todo}
                <button className='bg-orange-500 text-white px-10 py-3 mx-10 rounded-xl' onClick={(id)=> handleDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todo
