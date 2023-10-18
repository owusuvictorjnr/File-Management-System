'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const EditDetailsForm = ({ projecTitle, studentName }) => {
  const [newProjecTitle, setNewProjectTitle] = useState(projecTitle)

  const [newStudentName, setNewStudentName] = useState(studentName)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
        `http://localhost:3000/api/filesUploadInfo/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            newProjecTitle,
            newStudentName,
            // newFileName,
          }),
        }
      )

      if (!res.ok) {
        throw new Error('Failed to update details')
      }
      router.refresh()
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  // console.log('id:', id)
  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewProjectTitle(e.target.value)}
          value={newProjecTitle}
          type="text"
          placeholder="Project Title"
        />
        <input
          onChange={(e) => setNewStudentName(e.target.value)}
          value={newStudentName}
          type="text"
          placeholder="Student Name"
        />

        {/* <input
          onChange={(e) => setNewFile(e.target.value)}
          value={newFile}
          type="file"
        /> */}

        <button
          text="submit"
          className="bg-green-600 hover:bg-zinc-200/40 hover:text-orange-600 duration-700 text-white capitalize font-bold px-6 py-2"
        >
          update details
        </button>
      </form>
    </div>
  )
}

export default EditDetailsForm
