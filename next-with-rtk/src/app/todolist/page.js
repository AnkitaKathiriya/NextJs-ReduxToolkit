"use client"
import React, { useState } from 'react'
import { addTotods } from '../redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function page() {
  const [todo, setTodo] = useState("")
  const todoData = useSelector((data)=>data.todoData.todos);
  const dispatch=useDispatch()
  return (
    <div className='md:container md:mx-auto'>
      <h1>TodoList</h1><br/>
      <input type='text' placeholder='Enter Name' className=' className="px-5 border border-gray-200"' onChange={(e) => setTodo(e.target.value)}/><br/>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5" onClick={()=>dispatch(addTotods(todo))}
      >Add Todo</button><br/><br/>
      <h1>TODO LIST</h1>
      {
        todoData.length && todoData.map((item)=>{
          return(
            <div key={item.id}>
            <h6 >{item.name}</h6>
            </div>
          )
        })
      }
    </div>
  )
}
