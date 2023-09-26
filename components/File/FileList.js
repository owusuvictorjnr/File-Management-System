import FileItem from './FileItem'

function FileList() {
  const fileList = [
    {
      id: 1,
      name: 'Car Sale Receipt.docx',
      type: 'doc',
      size: '6272 kB',
      modifiedAt: 'April 15,2020',
    },
    {
      id: 2,
      name: 'Data Structure.pdf',
      type: 'pdf',
      size: '672 kB',
      modifiedAt: 'Jan 04,2022',
    },
    {
      id: 3,
      name: 'sample Image.png',
      type: 'image',
      size: '400 kB',
      modifiedAt: 'Nov 23,2023',
    },
    {
      id: 4,
      name: 'React Principal.docx',
      type: 'doc',
      size: '6272 kB',
      modifiedAt: 'Sept 23,2023',
    },
  ]

  return (
    <div
      className="bg-white mt-5 p-5 px-10 mx-5
    rounded-lg"
    >
      <h2 className="text-[1rem] font-bold">Recent Files</h2>
      <div
        className="grid grid-cols-3
        md:grid-cols-3
        text-[.8rem]
        font-semibold
        border-b-[1px]
        pb-2 mt-3
        border-gray-300
         text-gray-400"
      >
        <h2>Name</h2>
        {/* <div className="grid grid-cols-3 md:gap-[15rem]"> */}
        <h2>Modified</h2>
        <h2>Size</h2>
        {/* <h2></h2> */}
        {/* </div> */}
      </div>
      <div className="text-sm flex flex-col">
        {fileList &&
          fileList.map((item, index) => (
            <div key={index}>
              <FileItem file={item} key={index} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default FileList
