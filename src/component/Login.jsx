import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../fairBase/fairbas";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [avatar,setAvatar]=useState({
    file:null,
    url:''
  })
  // handel rigster
  const handleRegister=async(e)=>{
    e.preventDefault()
    const formaData=new FormData(e.target)
    const {username,email,password}=Object.fromEntries(formaData)
    try{
      const res= await createUserWithEmailAndPassword(auth,email,password)
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  }
  // handel input img
  const handelAvater=(e)=>{
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
      })
      console.log(avatar)
    }
  }
  // handel Login
     const handelLogin=(e)=>{
          e.preventDefault()
          toast.success('dddddddd')
     }
     const handelRigster=()=>{

     }
  return (
    <div className="grid grid-cols-2 w-full ">
      {/* left */}
      <div className="   flex justify-center items-center">
        <div className="  p-3 rounded flex flex-col  gap-1">
          <p className="text-xl font-bold text-center">Welcom back</p>
          <form className="flex flex-col gap-3" onSubmit={handelLogin}>
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] "
              type="email"
              placeholder="email"
            />
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] "
              type="password"
              placeholder="password"
            />
            <button type="submit" className="bg-blue-300 rounded-md px-1 py-2">
              login
            </button>
          </form>
        </div>
      </div>
      {/* rgith */}
      <div className="flex justify-center items-center">
        <div className="  p-3 rounded flex flex-col w-[50%]  gap-1">
          <p className="text-xl font-bold text-center">creat an Account</p>
          <form onSubmit={handleRegister}>
            <label className="flex items-center justify-between" htmlFor="file">
              <img
                className="w-10 h-10"
                src="../../public/avatar.png"
                alt="img"
              />
              uplod Image
            </label>
            <input
              onChange={handelAvater}
              id="file"
              className="opacity-0"
              type="file"
              placeholder="uplod your img"
              name=""
            />
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] w-full mt-2 "
              type="text"
              placeholder="username"
              name="username"
            />
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] w-full mt-2 "
              type="email"
              placeholder="email"
              name="email"
            />
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] w-full mt-2 "
              type="password"
              placeholder="password"
              name="password"
            />
            <button className="block" type="submit">
              sgin up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
