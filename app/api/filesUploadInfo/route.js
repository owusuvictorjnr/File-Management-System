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

export async function GET() {
  await connectMongoDB()

  const fileUploadInfo = await FileUploadInfo.find()

  return NextResponse.json({ fileUploadInfo })
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id')

  await FileUploadInfo.findByIdAndDelete(id)

  return NextResponse.json(
    { message: 'File deleted successfully' },
    { status: 200 }
  )
}
