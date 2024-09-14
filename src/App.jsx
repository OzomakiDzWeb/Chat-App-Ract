import React from 'react'
import '../src/App.css'
import Chat from './component/chat';
import List from './component/List';
import Details from './component/Details';
const App = () => {
  return (
    <div className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-lg flex">
      <List/>
      <Chat/>
      <Details/>
    </div>
  );
}

export default App