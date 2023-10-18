'use client'

import React, { useContext } from 'react'
import FolderItem from './FolderItem'
import { ShowToastContext } from '@/context/ShowToastContext'
import CreateDialogModal from './CreateDialogModal'

function FolderList({}) {
  const folderList = [
    {
      id: 1,
      name: 'CS & CE',
    },
    {
      id: 2,
      name: 'B M E',
    },
    {
      id: 3,
      name: 'Nursing',
    },
    {
      id: 4,
      name: 'ECE',
    },
    {
      id: 5,
      name: 'Oil & Gas',
    },
  ]

  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext)

  return (
    <div className="p-5 mt-5 bg-white rounded-lg">
      <h2 className="text-[2rem] font-bold items-center">
        Departments
        {/* <span className="float-right text-blue-400 font-normal text-[13px]">
          View All
        </span> */}
      </h2>

      {/* Folder Dialog Section */}
      <div
        onClick={() => document.getElementById('my_modal_4').showModal()}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4"
      >
        {folderList.map((item, index) => (
          <div key={index}>
            <FolderItem folder={item} />
          </div>
        ))}
      </div>

      <div className="">
        <dialog id="my_modal_4" className="modal">
          <CreateDialogModal />
        </dialog>
      </div>
    </div>
  )
}

export default FolderList
