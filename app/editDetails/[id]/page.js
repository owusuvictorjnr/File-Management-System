import EditDetailsForm from '@/components/EditDetailsForm'
import React from 'react'

const getDetailsById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/filesUploadInfo/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch details')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const EditDetails = async ({ params }) => {
  const { id } = params

  const { fileUploadInfo } = await getDetailsById(id)

  const { projecTitle, studentName } = fileUploadInfo

  // console.log('id:', id)
  return (
    <EditDetailsForm
      id={id}
      projecTitle={projecTitle}
      studentName={studentName}
    />
  )
}

export default EditDetails
