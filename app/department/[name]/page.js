import Link from 'next/link'
import React from 'react'

const Department = () => {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="flex justify-between gap-10">
          <div className="">read file</div>

          <Link href={'/department/upload-file'} className="capitalize">
            upload
          </Link>
        </div>
      </div>
    </>
  )
}

export default Department
