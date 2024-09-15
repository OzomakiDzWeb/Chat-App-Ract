import React from "react";
import { IoIosMore } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineCreate } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import ItmChat from "./itmChat";
const List = () => {
  return (
    <div
      className=" flex flex-col p-4 overflow-y-scroll  [&::-webkit-scrollbar]:w-[2px]  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-[rgba(17,25,40)]   border-r border-white/50 "
    >
      {/* heder */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/public/avatar.png" alt="avter" />
          </div>
          <p className="text-xl font-semibold">John Smith</p>
        </div>
        <div className="flex gap-4">
          <IoIosMore size={20} />
          <IoVideocam size={20} />
          <MdOutlineCreate size={20} />
        </div>
      </div>
      {/* searchBar */}
      <div className=" mt-5 flex items-center gap-2 justify-between">
        <div className="flex items-center gap-1 bg-[rgba(17,25,40,0.75)] rounded-sm py-1 px-2">
          <IoMdSearch size={20} />
          <input
            className="bg-transparent focus:outline-none"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="bg-[rgba(17,25,40,0.75)] h-8 w-8 flex items-center justify-center ">
          <FaPlus size={20} />
        </div>
      </div>
      {/* itm chat */}
      <div className="mt-5  divide-y divide-slate-700">
        <ItmChat />

      
        <ItmChat />
        <ItmChat />
      </div>
    </div>
  );
};

export default List;
