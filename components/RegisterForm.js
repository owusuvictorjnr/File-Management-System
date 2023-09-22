import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-l font-bold my-4 capitalize">register</h1>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="First Name" />

          <input type="text" placeholder="Last Name" />

          <input type="text" placeholder="Email" />

          <input type="text" placeholder="Password" />

          <button className="bg-green-600 text-white capitalize font-bold px-6 py-2">
            signup
          </button>

          <div className="bg-red-500 capitalize text-white w-fit text-sm py-1 px-3 rounded-md">
            error message
          </div>

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
