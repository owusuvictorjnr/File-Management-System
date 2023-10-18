import FileUploadInfo from '@/models/fileUploadInfo'
import { connectMongoDB } from '@/utils/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req, { params }) {
  const { id } = params
  const { newProjecTitle: projecTitle, newStudentName: studentName } =
    await req.json()

  await connectMongoDB()

  await FileUploadInfo.findByIdAndUpdate(id, { projecTitle, studentName, file })

  return NextRequest.json({ message: 'File updated successfully' })
}

// fetching one file by its id
export async function GET(req, { params }) {
  const { id } = params

  await connectMongoDB()
  const fileUploadInfo = await FileUploadInfo.findOne({ _id: id })

  return NextResponse.json({ fileUploadInfo }, { status: 200 })
}
