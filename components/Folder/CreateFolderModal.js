'use client'

import { app } from '@/Config/FirebaseConfig'
import { ShowToastContext } from '@/context/ShowToastContext'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const CreateFolderModal = () => {
  const [folderName, setFolderName] = useState()

  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext)

  const { data: session } = useSession()

  const docId = Date.now().toString()

  const db = getFirestore(app)

  const onCreate = async () => {
    console.log(folderName)
    await setDoc(doc(db, 'Folders', docId), {
      name: folderName,
      id: docId,
      createdBy: session.user?.email,
    })
    setShowToastMsg('Folder Created')
  }

  return (
    <div>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="w-full items-center flex flex-col justify-center gap-3">
            <Image src="/logo/folder.png" alt="folder" width={50} height={50} />
            <input
              onChange={(e) => setFolderName(e.target.value)}
              type="text"
              placeholder="Folder Name"
              className="w-full rounded-md p-2 border-[.1rem] outline-none"
            />
          </div>
          
          <button
            onClick={() => onCreate()}
            className="capitalize bg-blue-500 mt-2 text-white rounded-md px-3 p-2 w-full"
          >
            create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateFolderModal
