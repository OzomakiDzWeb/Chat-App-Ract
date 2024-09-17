import React, { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineCreate } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import AddUser from "./addUser";
import { useUserStore } from "../Store/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../fairBase/fairbas";

const List = () => {
  const [isOpen,setOpen]=useState(false)
  const [chats,setchats]=useState([]);
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      console.log(res.data());
      const itmes=res.data().chats;
      const promises=itmes.map(async(itm)=>{
        const userDocRef=doc(db,'users',itm.receiverId);
        const userDocSnap=await getDoc(userDocRef)
        const user=userDocSnap.data()
        return {...itm,user}
      })
      const chatData=await Promise.all(promises)
      setchats(chatData.sort((a,b)=>b.updatedAt-a.updatedAt))
      
    });
    return () =>{ unsub()};
  }, [currentUser.id]);
    console.log(`${chats}+ kkkkkkkkkkkkkkk`);
  return (
    <div
      className=" flex flex-col p-4 overflow-y-scroll  [&::-webkit-scrollbar]:w-[2px]  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-[rgba(17,25,40)]   border-r border-white/50 "
    >
      {/* heder */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden">
            <img src={`${"../../public/avatar.png"}`} alt="avter" />
          </div>
          <p className="text-xl font-semibold">{currentUser.username}</p>
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
          <div className="cursor-pointer " onClick={() => setOpen(!isOpen)}>
            {isOpen ? <FaPlus size={20} /> : <FaMinus size={20} />}
          </div>
        </div>
      </div>
      {/* itm chat */}
      <div className="mt-5  divide-y divide-slate-700">
        {chats.map((itm) => (
          <div key={itm.chatId} className="flex gap-3 items-center  py-3">
            <div className="h-10 w-10 rounded-full flex justify-center items-center bg-black"></div>
            <div>
              <p className="text-xl font-normal">ddcdcdc</p>
              <span className="text-xs">dddddd</span>
            </div>
          </div>
        ))}
      </div>
      <AddUser isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default List;
