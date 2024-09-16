import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../fairBase/fairbas";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../fairBase/upload";
const Login = () => {
  const [avatar,setAvatar]=useState({
    file:null,
    url:''
  })
  const [loding,setLoding]=useState(false)
  // handel rigster
  const handleRegister=async(e)=>{
    e.preventDefault()
    setLoding(true)
    const formaData=new FormData(e.target)
    const {username,email,password}=Object.fromEntries(formaData)
    try{
      // creat user
      const res= await createUserWithEmailAndPassword(auth,email,password)
      // img url
      const imgUrl=await upload(avatar.file)
      // register user in database
      await setDoc(doc(db,'users',res.user.uid),{
         username,
         email,
         avatar:imgUrl,
         id:res.user.uid,
         blocked:[]
      })
      // register user in list chat
     await setDoc(doc(db,'userchats',res.user.uid),{
      chats:[]
     })
      toast.success('Account created,you can login now')
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }finally{setLoding(false)}
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
     const handelLogin=async(e)=>{
          e.preventDefault()
          setLoding(true)
          const formaData=new FormData(e.target)
          const {email,password}=Object.fromEntries(formaData)
          try{
             await signInWithEmailAndPassword(auth,email,password) 
             toast.success('hay ')
          }catch(err){
            console.log(err) 
            toast.error(err.message)
          }finally{
            setLoding(false)
          }
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
                src={avatar.url || '../../public/avatar.png'}
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
            <button disabled={loding} className={`${loding?'bg-blue-400':'bg-blue-700'} block px-2 py-1 rounded mt-3 mx-auto`} type="submit">
              {loding?'loding':'sgin up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
