import React from "react";
import "../src/App.css";
import Chat from "./component/chat";
import List from "./component/List";
import Details from "./component/Details";
import Login from "./component/Login";
const App = () => {
  const user=false
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
    </div>
  );
};

export default App;
