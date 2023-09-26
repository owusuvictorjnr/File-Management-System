'use client'

import React from 'react'
import SideBarNav from './SideBarNav'
import SearchBar from './SearchBar'
import FolderList from './Folder/FolderList'
import FileItem from './File/FileItem'
import FileList from './File/FileList'
import CreateFolderModal from './Folder/CreateFolderModal'
// import { signOut } from 'next-auth/react'
// import { useSession } from 'next-auth/react'

const FileUpload = () => {
  return (
    <main className="bg-blue-200/40">
      <div className="flex">
        <SideBarNav />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
          <div className="col-span-3">
            <div className="p-5 ">
              <SearchBar />
            </div>
            <div className="">
              <FolderList />
              <FileList />
            </div>
          </div>
          <div className="bg-white p-5 mx-5 mt-5 h-full lg:w-[25rem] md:w-[45rem] ">
            storage
          </div>
        </div>
        {/* <div className="">
        <CreateFolderModal />
      </div> */}
      </div>
    </main>
  )
}

export default FileUpload

// const { data: session } = useSession()
//   return (
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
//         <div>
//           Name: <span className="font-bold">{session?.user?.name}</span>
//         </div>

//         <div>
//           Email: <span className="font-bold">{session?.user?.email}</span>
//         </div>

//         <button
//           onClick={() => signOut()}
//           className="bg-red-500 text-white from-bold px-6 py-2 mt-3"
//         >
//           log out
//         </button>
//       </div>
//     </div>
//   )

{
  /* <div className="grid place-items-center h-screen ">
<div className="">
  <input
    type="search"
    placeholder="Search"
    className="w-full rounded-full "
  />
</div>
<div className="shadow-lg rounded-lg border-t-4 border-green-400 ">
  <form className="flex flex-col gap-4">
    <input type="file" />
    <input type="text" placeholder="First Name" />

    <input type="text" placeholder="Middle Name" />

    <input type="text" placeholder="Last Name" />

    <input type="text" placeholder="Semester" />

    <input type="text" placeholder="Project Topic" />

    <input type="text" placeholder="Supervisor" />

    <button
      type=""
      className="bg-orange-500 rounded-lg py-2 px-5 text-white text-2lg capitalize duration-500 hover:bg-zinc-300/40 hover:text-red-500 font-bold  "
    >
      submit
    </button>
  </form>
</div>
</div> */
}
