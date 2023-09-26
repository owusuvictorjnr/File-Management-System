'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import menu from '../data/menu'
import CreateFolderModal from './Folder/CreateFolderModal'

const SideBarNav = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="w-[15rem] bg-white h-screen sticky top-0 z-10 shadow-blue-600 shadow-md ">
      <div className="p-5 w-full flex gap-5 bg-blue-500/30 shadow-black/40 shadow-md hover:bg-zinc-200">
        <Image
          src="/logo/ehassa.png"
          alt="ehassa"
          width={1000}
          height={1000}
          className="w-[3rem] "
        />
        <h1 className="flex items-center text-white text-sm md:text-lg font-bold ">
          ANU FMS
        </h1>
      </div>

      {/* Buttoms */}
      <div className="mt-[1rem] p-5">
        <div className="flex justify-center">
          <button className="capitalize flex justify-center items-center text-sm md:text-lg w-full gap-2 bg-blue-500 p-2 text-white rounded-md px-3 hover:scale-105 duration-300 transition-all">
            new file
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-1">
          <button
            onClick={() => document.getElementById('my_modal_3').showModal()}
            className="capitalize flex justify-center items-center text-sm md:text-lg w-full gap-2 bg-sky-500 p-2 text-white rounded-md px-3 hover:scale-105 duration-300 transition-all"
          >
            new folder
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu  */}
      <div className="p-5">
        {menu.list.map((item, index) => (
          <div className="" key={index}>
            <h2
              onClick={() => setActiveIndex(index)}
              className={`flex gap-2 p-2 items-center mt-3 rounded-md cursor-pointer text-gray-500 hover:bg-blue-500 hover:text-white ${
                activeIndex === index ? 'bg-blue-500 text-white' : 'null'
              }`}
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
                  d={item.logo}
                />
              </svg>

              {item.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Open Toast */}
      <div className="">
        <dialog id="my_modal_3" className="modal">
          <CreateFolderModal />
        </dialog>
      </div>

      {/* Brand Footer */}
      <div className="mt-[27rem]">
        <div className=" bg-blue-900/40 flex justify-center ">
          <span className="text-sm text-gray-500">
            &copy; 2023 <Link href="https://cre8iveinc.com/">Cre8ive In™</Link>.
            <div className="">All Rights Reserved.</div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SideBarNav
