"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
export default function DisplayUsers() {
  const userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();
  return (
    <div className="p-5 w-1/2">
      <h3 className="font-bold font-size-lg">User List</h3>
      {userData.map((item) => {
        // console.log("item",item)
        return (
          <div key={item.id} className="flex justify-between">
            <div className="font-100 font-size-lg bg-sky-500/50 p-1 rounded-sm my-2 w-100 w-2/5">
              {item.name}
            </div>
            <button
              className="font-100 font-size-lg px-2 rounded-lg bg-cyan-500/50 my-2"
              onClick={() => dispatch(removeUser(item.id))}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
