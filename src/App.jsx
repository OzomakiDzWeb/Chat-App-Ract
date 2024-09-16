import React, { useEffect } from "react";
import "../src/App.css";
import Chat from "./component/chat";
import List from "./component/List";
import Details from "./component/Details";
import Login from "./component/Login";
import Notifiction from "./component/Notifiction";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fairBase/fairbas";
const App = () => {
  const user = false;
  useEffect(()=>{
    const unSub=onAuthStateChanged(auth,(user)=>{
      console.log(user)
      
    })
    return ()=>{
      unSub()
    }
  },[])
  return (
    <div className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-lg flex mt-7 rounded-md overflow-y-hidden ">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notifiction />
    </div>
  );
};

export default App;
