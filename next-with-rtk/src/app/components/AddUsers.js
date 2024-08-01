"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    // console.log(name)
      dispatch(addUser(name))
  };
  return (
    <div className="p-5 border-gray-200 border w-1/2">
      <h3 className="font-bold font-size-lg mb-5">Add User</h3>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter User Name"
        className="px-5 border border-gray-200"
      />
      <br></br>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
        onClick={userDispatch}
      >
        Add User
      </button>
    </div>
  );
}
