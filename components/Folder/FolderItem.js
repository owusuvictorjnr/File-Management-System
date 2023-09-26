import Image from 'next/image'
import React from 'react'

const FolderItem = ({ folder }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  border-[.1rem] rounded-lg p-5 hover:scale-105 hover:shadow-md duration-300 cursor-pointer">
      <Image
        src="/logo/folder.png"
        alt="folder"
        width="1000"
        height={1000}
        className="w-[5rem] h-[5rem]"
      />
      <h2 className="line-clamp-2 text-sm md:text-2xl">{folder.name}</h2>
    </div>
  )
}

export default FolderItem
