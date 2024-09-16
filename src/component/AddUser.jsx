import React from "react";

const AddUser = ({ isOpen, setOpen }) => {
  return (
    <div
      className={`${isOpen?'hidden':'block'} bg-[rgba(17,25,40,0.92)] z-10 p-4 rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] `}
    >
      <div className="flex justify-between gap-2">
        <input
          className="focus:outline-none rounded-sm px-1 text-black"
          type="text"
          placeholder="username"
        />
        <button className="py-1 px-2 bg-blue-400 rounded-md">search</button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-between items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="../../public/avatar.png"
            alt="imguser"
          />
          <p>jane doe</p>
        </div>
        <button className="py-1 px-2 bg-blue-400 rounded-md">Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
