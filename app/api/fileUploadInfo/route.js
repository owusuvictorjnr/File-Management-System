import FileUploadInfo from '@/models/fileUploadInfo'
import { connectMongoDB } from '@/utils/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const {
      project_tile,
      student_name,
      department,
      index_number,
      supervisor,
      head_of_dept,
      calendar,
      file_type,
    } = await req.json()

    await connectMongoDB()

    await FileUploadInfo.create({
      project_tile,
      student_name,
      department,
      index_number,
      supervisor,
      head_of_dept,
      calendar,
      file_type,
    })

    return NextResponse.json(
      { message: 'File uploaded successfully' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while uploading the file' },
      { status: 500 }
    )
  }
}
