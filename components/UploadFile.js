'use client'

import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const UploadFile = () => {
  const [projecTitle, setProjecTitle] = useState('')
  const [studentName, setStudentName] = useState('')
  const [department, setDepartment] = useState('')
  const [indexNumber, setIndexNumber] = useState('')
  const [deptHead, setDeptHead] = useState('')
  const [supervisor, setSupervisor] = useState('')
  const [file, setFile] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !projecTitle ||
      !studentName ||
      !department ||
      !indexNumber ||
      !deptHead ||
      !supervisor ||
      !file
    ) {
      alert('All fields are required')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/filesUploadInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projecTitle,
          studentName,
          department,
          indexNumber,
          deptHead,
          supervisor,
          file,
        }),
      })

      if (res.ok) {
        const form = e.target
        form.reset()
        router.push('/dashboard')
      } else {
        console.log('user registration failed')
      }
    } catch (error) {
      console.log('Error during registration', error)
    }
  }

  //   console.log('Title: ', projecTitle, 'Student name:', studentName)

  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setProjecTitle(e.target.value)}
          value={projecTitle}
          type="text"
          placeholder="Project Title"
        />
        <input
          onChange={(e) => setStudentName(e.target.value)}
          value={studentName}
          type="text"
          placeholder="Student Name"
        />

        <input
          onChange={(e) => setDepartment(e.target.value)}
          value={department}
          type="text"
          placeholder="Department Name"
        />

        <input
          onChange={(e) => setIndexNumber(e.target.value)}
          value={indexNumber}
          type="text"
          placeholder="Index Number"
        />

        <input
          onChange={(e) => setDeptHead(e.target.value)}
          value={deptHead}
          type="text"
          placeholder="HOD"
        />

        <input
          onChange={(e) => setSupervisor(e.target.value)}
          value={supervisor}
          type="text"
          placeholder="Supervisor"
        />

        <input
          onChange={(e) => setFile(e.target.value)}
          value={file}
          type="file"
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
