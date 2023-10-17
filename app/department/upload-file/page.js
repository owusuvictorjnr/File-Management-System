'use client'

import React, { useContext, useState } from 'react'

// projecTitle,
//     studentName,
//     department,
//     indexNumber,
//     deptHead,
//     supervisor,

const UploadFile = () => {
  return (
    <div className="grid place-items-center h-screen">
      <form className="flex flex-col gap-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Project Title"
        />
        <input
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          placeholder="Student Name"
        />

        <input
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          placeholder="Department Name"
        />

        <input
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          placeholder="Index Number"
        />

        <input
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          placeholder="HOD"
        />

        <input
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          placeholder="Supervisor"
        />

        <button
          text="submit"
          className="bg-green-600 hover:bg-zinc-200/40 hover:text-orange-600 duration-700 text-white capitalize font-bold px-6 py-2"
        >
          upload
        </button>
      </form>
    </div>
  )
}

export default UploadFile
