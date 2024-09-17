import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../fairBase/fairbas";
import { useUserStore } from "../Store/userStore";

const AddUser = ({ isOpen, setOpen }) => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
const [user,setUser]=useState(null)
// handel search
  const handelSearch=async e=>{
    e.preventDefault()
    const fromData=new FormData(e.target);
    const username = fromData.get("username");
    try{
    const userRef=collection(db,'users')

    const q=query(userRef,where('username','==',username))
    const querySnapShot=await getDocs(q)
    if(!querySnapShot.empty){
      setUser(querySnapShot.docs[0].data());
    }
    }catch (err){
      console.log()
    }
  }
// handel add user to chat list
const handleAdd=async ()=>{
  const chatRef=collection(db,'chats')
  const userchatRef=collection(db,'userchats')
  try {
    const newChatRef=doc(chatRef)
    await setDoc(newChatRef,{
      createAt:serverTimestamp(),
      messages:[]
    })
    await updateDoc(doc(userchatRef, user.id), {
      chats: arrayUnion({
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: currentUser.id,
        updatedAt: Date.now(),
      }),
    });

      await updateDoc(doc(userchatRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    console.log(newChatRef.id);
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div
      className={`${
        isOpen ? "hidden" : "block"
      } bg-[rgba(17,25,40,0.92)] z-10 p-4 rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] `}
    >
      <div className="flex justify-between gap-2">
        <form onSubmit={handelSearch}>
          <input
            className="focus:outline-none rounded-sm px-1 text-black"
            type="text"
            placeholder="username"
            name="username"
          />
          <button className="py-1 px-2 bg-blue-400 rounded-md">search</button>
        </form>
      </div>
      {user && (
        <div className="flex justify-between items-center mt-4">
          <div className="flex justify-between items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={user.avatar || "../../public/avatar.png"}
              alt="imguser"
            />
            <p>{user.username}</p>
          </div>
          <button
            onClick={handleAdd}
            className="py-1 px-2 bg-blue-400 rounded-md"
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
