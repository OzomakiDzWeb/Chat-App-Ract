import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";
import { auth } from '../fairBase/fairbas';
const Details = () => {
  return (
    <div className="flex flex-col p-4 border-l">
      {/* top */}
      <div className="border-b flex flex-col justify-center items-center my-5 pb-5 ">
        <img
          className="w-10 h-10 rounded-full"
          src="../../public/avatar.png"
          alt="user"
        />
        <p className="font-semibold text-md">jane</p>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing el
        </p>
      </div>

      {/* botom */}
      <div>
        <div className="flex justify-between my-5">
          <p className="font-bold text-xs">Chat Settings</p>
          <div className="h-5 w-5 bg-[rgba(17,25,40,0.75)] rounded-full flex items-center justify-center">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="flex justify-between my-5">
          <p className="font-bold text-xs">Chat Settings</p>
          <div className="h-5 w-5 bg-[rgba(17,25,40,0.75)] rounded-full flex items-center justify-center">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="flex justify-between my-5">
          <p className="font-bold text-xs">Chat Settings</p>
          <div className="h-5 w-5 bg-[rgba(17,25,40,0.75)] rounded-full flex items-center justify-center">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="flex justify-between my-5">
          <p className="font-bold text-xs">Chat Settings</p>
          <div className="h-5 w-5 bg-[rgba(17,25,40,0.75)] rounded-full flex items-center justify-center">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="flex flex-col justify-between my-5">
          <div className='flex justify-between mb-2'>
            <p className="font-bold text-xs">shared photos</p>
            <div className="h-5 w-5 bg-[rgba(17,25,40,0.75)] rounded-full flex items-center justify-center">
              <IoIosArrowUp />
            </div>
          </div>
          {/* photos */}
          <div className=''>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <img className='w-10 h-10' src="../../public/bg.jpg" alt="img" />
                <span className='text-xs'>nam photo</span>
              </div>
              <div className="h-5 w-5 bg-[rgba(17,25,40,0.75)] rounded-full flex items-center justify-center">
                <FaLongArrowAltDown />
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <button className='px-2 py-1 bg-red-300 rounded-md cursor-pointer'>block user</button>
      <button onClick={()=>auth.signOut()} className='px-2 py-1 bg-red-300 rounded-md cursor-pointer'>log out </button>
    </div>
  );
}

export default Details