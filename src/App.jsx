import React, { useEffect } from "react";
import "../src/App.css";
import Chat from "./component/chat";
import List from "./component/List";
import Details from "./component/Details";
import Login from "./component/Login";
import Notifiction from "./component/Notifiction";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fairBase/fairbas";
import { useUserStore } from "./Store/userStore";
const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
 
  if(isLoading) return <div>loding...</div>
  return (
    <div className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-lg flex mt-7 rounded-md overflow-y-hidden ">
      {currentUser ? (
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
