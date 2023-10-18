import React from 'react'
import Link from 'next/link'
import FileUploadInfo from '@/models/fileUploadInfo'
import RemoveBtn from '@/components/RemoveBtn'
import SearchBar from '@/components/SearchBar'
// import { useRouter } from 'next/navigation'

const getDetails = async () => {
  // const router = useRouter()
  try {
    const res = await fetch('http://localhost:3000/api/filesUploadInfo', {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to get details')
    }
    // router.refresh()
    return res.json()
  } catch (error) {
    console.log('Error fetching details', error)
  }
}

// console.log(typeof req)
export default async function ViewFile() {
  const { fileUploadInfo } = await getDetails()

  // const router = useRouter()
  return (
    <>
      <div className="sticky top-0 z-10 w-full flex items-center gap-10 px-2 mt-0">
        <Link
          href={'/dashboard'}
          className="bg-[#e85d04] px-5 text-center py-3 w-[10rem] rounded text hover:bg-[#e9ecef] hover:text-[#ef233c] duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#14213d"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
        <SearchBar />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}

            <thead className="font-bold text-black text-xl">
              <tr>
                <th>Student Name</th>
                <th>Project Title</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {fileUploadInfo.map((details) => (
                <tr key={details}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{details.studentName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {details.projecTitle}
                    </span>
                  </td>
                  <td>{details.department}</td>

                  {/* View File */}
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </th>

                  {/* Edit File */}
                  <th>
                    <Link
                      href={`/editDetails/${details._id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </Link>
                  </th>

                  {/* Delete button */}
                  <th>
                    <RemoveBtn id={details._id} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
