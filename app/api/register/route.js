import User from '@/models/user'
import { connectMongoDB } from '@/utils/mongodb'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    const { fname, lname, email, password } = await req.json()
    const hashPassword = await bcrypt.hash(password, 10)

    await connectMongoDB()
    await User.create({ fname, lname, email, password: hashPassword })

    return NextResponse.json({ message: 'User registerd' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering user' },
      { status: 500 }
    )
  }
}
