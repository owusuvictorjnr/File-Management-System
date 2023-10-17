import FileUploadInfo from '@/models/fileUploadInfo'
import { connectMongoDB } from '@/utils/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const {
    projecTitle,
    studentName,
    department,
    indexNumber,
    deptHead,
    supervisor,
  } = await req.json()

  await connectMongoDB()

  await FileUploadInfo.create({
    projecTitle,
    studentName,
    department,
    indexNumber,
    deptHead,
    supervisor,
  })

  return NextResponse.json(
    { message: 'File created successfully' },
    { status: 201 }
  )
}
