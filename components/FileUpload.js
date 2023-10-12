'use client'

import React, { useState } from 'react'
import SideBarNav from './SideBarNav'
import SearchBar from './SearchBar'
import FolderList from './Folder/FolderList'
import FileItem from './File/FileItem'
import FileList from './File/FileList'
import CreateFolderModal from './Folder/CreateFolderModal'
import Toast from './Toast'
import { ShowToastContext } from '@/context/ShowToastContext'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import { app } from '@/Config/FirebaseConfig'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

const FileUpload = () => {
  const [showToastMsg, setShowToastMsg] = useState()

  const [folderList, setFolderList] = useState([])

  const { data: session } = useSession()

  const db = getFirestore(app)

  const getFolderList = async () => {
    setFolderList([])
    const q = query(
      collection(db, 'Folders'),
      where('createBy', '==', session?.user?.email)
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data())
      setFolderList((folderList) => [...folderList, doc.data()])
    })
  }

  // console.log(typeof getFolderList)

  return (
    <main className="bg-blue-200/40">
      <ShowToastContext.Provider value={{ showToastMsg, setShowToastMsg }}>
        <div className="flex">
          <SideBarNav />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
            <div className="col-span-3">
              <div className="p-5 ">
                <SearchBar />
              </div>

              {/* Middle Section */}
              <div className="">
                <FolderList folderList={folderList} />

                {folderList.length}
                {/* 
                <div className="bg-teal-500 h-10 w-10">
                  <Image
                    src="/logo/folder.png"
                    alt="folder"
                    height={200}
                    width={200}
                  />
                </div> */}

                <FileList />
              </div>
            </div>

            {/* Right Side Bar */}
            <div className="bg-white p-5 mx-5 mt-5 h-full lg:w-[25rem] md:w-[45rem] ">
              {/* storage */}

              <div className="">
                <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
                  <div>
                    Email:{' '}
                    <span className="font-bold">{session?.user?.email}</span>
                  </div>

                  <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white rounded-md from-bold px-6 py-2 mt-3"
                  >
                    log out
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="">
        <CreateFolderModal />
      </div> */}

          {showToastMsg ? <Toast msg={showToastMsg} /> : null}
        </div>
      </ShowToastContext.Provider>
    </main>
  )
}

export default FileUpload

// const { data: session } = useSession()
//   return (
// <div className="grid place-items-center h-screen">
//   <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
//     <div>
//       Name: <span className="font-bold">{session?.user?.name}</span>
//     </div>

//     <div>
//       Email: <span className="font-bold">{session?.user?.email}</span>
//     </div>

//     <button
//       onClick={() => signOut()}
//       className="bg-red-500 text-white from-bold px-6 py-2 mt-3"
//     >
//       log out
//     </button>
//   </div>
// </div>
//   )
