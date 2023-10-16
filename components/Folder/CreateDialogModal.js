'use client'

import Link from 'next/link'
import FolderList from './FolderList'
import { useRouter } from 'next/navigation'

const CreateDialogModal = ({ folder }) => {
  const router = useRouter()
  return (
    <div>
      <div className="modal-box w-[25rem] ">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <div className="w-full h-[10rem] flex items-center justify-between gap-10">
            <button
              onClick={() => router.push(`/department/upload-file/`)}
              className="capitalize  bg-green-500 mt-2 text-white rounded-md px-3 p-2 w-full hover:scale-95 duration-100"
            >
              upload file
            </button>

            <button
              onClick={() => router.push(`/view-file`)}
              // onClick={() => onCreate()}
              className="capitalize bg-blue-500 mt-2 text-white rounded-md px-3 p-2 w-full "
            >
              view file
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateDialogModal
