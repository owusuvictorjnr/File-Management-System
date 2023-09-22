'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Register = () => {
  const [fname, setFname] = useState('')

  const [lname, setLname] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!fname || lname || email || password) {
      setError('All fields are required')
      return
    }
  }

  // console.log('Name: ', fname, lname)

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-l font-bold my-4 capitalize">register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text"
            placeholder="First Name"
          />

          <input
            onChange={(e) => setLname(e.target.value)}
            type="text"
            placeholder="Last Name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />

          <button className="bg-green-600 text-white capitalize font-bold px-6 py-2">
            signup
          </button>

          {error && (
            <div className="bg-red-500 capitalize text-white w-fit text-sm py-1 px-3 rounded-md">
              {error}
            </div>
          )}

          <Link href={'/'} className="text-sm mt-3 text-right">
            Already have an account?{' '}
            <span className="underline capitalize">sign in</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
