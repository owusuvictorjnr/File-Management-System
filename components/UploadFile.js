'use client'

import React from 'react'
import { useRouter } from 'next/router'

const UploadFile = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (res.ok) {
        const form = e.target
        form.reset()
        router.push('/')
      } else {
        console.log('user registration failed')
      }
    } catch (error) {
      console.log('Error during registration', error)
    }
  }
  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" placeholder="Project Title" />
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Department" />
        <input type="text" placeholder="Indx Number" />
        <input type="text" placeholder="Project Supervisor" />
        <input type="text" placeholder="Head of Department" />
        <input type="date" placeholder="Date of Submission" />
        <input type="file" placeholder="Choose File" />
        <button className="bg-green-600 hover:bg-zinc-200/40 hover:text-orange-600 duration-700 text-white capitalize font-bold px-6 py-2">
          upload
        </button>
      </form>
    </div>
  )
}

export default UploadFile
