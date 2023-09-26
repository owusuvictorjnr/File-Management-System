import React from 'react'
import FolderItem from './FolderItem'

function FolderList() {
  const folderList = [
    {
      id: 1,
      name: 'Folder 1',
    },

    {
      id: 2,
      name: 'Folder 2',
    },

    {
      id: 3,
      name: 'Folder 3',
    },

    {
      id: 4,
      name: 'Folder 4',
    },
    // {
    //   id: 5,
    //   name: 'Folder 5',
    // },
  ]
  return (
    <div className="p-5 mx-5 mt-5 bg-white rounded-lg">
      <h2 className="capitalize text-sm md:text-xl font-bold">
        recent folder{' '}
        <span className="float-right text-blue-400 font-normal">view all</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {folderList.map((item, index) => (
          <div key={index}>
            <div className="">
              <FolderItem folder={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FolderList
