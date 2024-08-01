"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice';
export default function page() {
  const userData = useSelector((data)=>data.userData.users);
  const dispatch = useDispatch()
  console.log(userData);
  return (
    <div className='p-5'>
      <h1>Remove User Page</h1>
      {
        userData.map((item)=>{
          return(
            <div className='flex justify-between w-2/5' key={item.id}>
              <div className='font-100 font-size-lg'>{item.name}</div>
              <button className='p-3 font-bold border-1  border-sky-300 font-size-sm' onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
            </div>
          )
        })
      }
    </div>
  )
}
