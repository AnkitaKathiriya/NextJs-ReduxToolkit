"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUserData } from "../redux/slice";
export default function page() {
  const dispatch = useDispatch()
  const apiUserData = useSelector((data)=>data.userData.userAPIData)
  useEffect(()=>{
    dispatch(fetchApiUserData())
  },[])
  return (
    <div className="md:container md:mx-auto">
      <h1 className="text-4xl text-pink-950	mb-5">UserList from Api</h1>
      {
        apiUserData.map((item)=>{
          return(
            <div className="border-2 border-black	rounded-md p-5 mb-3 max-w-80">
              <div className="font-300 mb-2">Name: {item.name}</div>
              <div className="font-300 mb-2">UserName: {item.username}</div>
              <div className="font-300 mb-2">Email: {item.email}</div>
              <div className="font-300 mb-2">Address: {item.address.suite},{item.address.street},{item.address.city},{item.address.zipcode}</div>
            </div>
          )
        })
      }
    </div>
  );
}
