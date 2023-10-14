import React, { useState } from 'react'
import FolderItem from './FolderItem'
import { useRouter } from 'next/navigation'

// import FolderItemSmall from './FolderItemSmall'

function FolderList({}) {
  const [activeFolder, setActiveFolder] = useState()
  const router = useRouter()

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

  const onFolderClick = (index) => {
    setActiveFolder(index)
    router.push('/department/name')
  }
  return (
    <div className="p-5 mt-5 bg-white rounded-lg">
      <h2 className="text-[2rem] font-bold items-center">
        Departments
        {/* <span className="float-right text-blue-400 font-normal text-[13px]">
          View All
        </span> */}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4">
        {folderList.map((item, index) => (
          <div key={index} onClick={() => onFolderClick(item.id)}>
            <FolderItem folder={item} activeFolder={activeFolder == index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FolderList

// import React, { useState } from 'react'
// import FolderItem from './FolderItem'

// function FolderList({ folderList }) {
//   const [activeFolder, setActiveFolder] = useState()

//   const onFolderClick = () =>(index, item) => {
//     setActiveFolder(index)
//   }

//   return (
//     <div className="p-5 mx-5 mt-5 bg-white rounded-lg">
//       <h2 className="capitalize text-sm md:text-xl font-bold">
//         recent folder{' '}
//         <span className="float-right text-blue-400 font-normal">view all</span>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {folderList.map((item, index) => (
//           <div key={index}>
//             <div className="">
//               <FolderItem folder={item} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default FolderList
