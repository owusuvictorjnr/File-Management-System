'use client'

import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const UploadFile = () => {
  const [title, setTitle] = useState('')
  const [name, setStudentName] = useState('')
  const [department, setDepartment] = useState('')
  const [indexNumber, setIndexNumber] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [deptHead, setDeptHead] = useState('')
  const [calendar, setCalendar] = useState('')
  const [uploadFile, setUploadFile] = useState('')
  const [error, setError] = useState('')
  // const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !title ||
      !name ||
      !department ||
      !indexNumber ||
      !supervisor ||
      !deptHead ||
      !calendar ||
      !uploadFile
    ) {
      setError('All fields are required')
      return
    }

    try {
      const res = await fetch('api/fileUploadInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          name,
          department,
          indexNumber,
          supervisor,
          deptHead,
          calendar,
          uploadFile,
        }),
      })

      if (res.ok) {
        const form = e.target
        form.reset()
        router.push('/')
      } else {
        console.log('File upload failed')
      }
    } catch (error) {
      console.log('Error during file upload', error)
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
          onChange={(e) => setDepartment(e.target.value)}
          type="text"
          placeholder="Department"
        />
        <input
          onChange={(e) => setIndexNumber(e.target.value)}
          type="text"
          placeholder="Index Number"
        />
        <input
          onChange={(e) => setSupervisor(e.target.value)}
          type="text"
          placeholder="Project Supervisor"
        />
        <input
          onChange={(e) => setDeptHead(e.target.value)}
          type="text"
          placeholder="Head of Department"
        />
        <input
          onChange={(e) => setCalendar(e.target.value)}
          type="date"
          placeholder="Date of Submission"
        />
        <input
          onChange={(e) => setUploadFile(e.target.value)}
          type="file"
          placeholder="Choose File"
        />
        <button
          text="submit"
          className="bg-green-600 hover:bg-zinc-200/40 hover:text-orange-600 duration-700 text-white capitalize font-bold px-6 py-2"
        >
          upload
        </button>

        {error && (
          <div className="bg-red-500 capitalize text-white w-fit text-sm py-1 px-3 rounded-md">
            {error}
          </div>
        )}
      </form>
    </div>
  )
}

export default UploadFile
