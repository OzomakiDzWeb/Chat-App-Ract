import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-2 w-full ">
      {/* left */}
      <div className="   flex justify-center items-center">
        <div className="  p-3 rounded flex flex-col  gap-1">
          <p className="text-xl font-bold text-center">Welcom back</p>
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
          <button className="bg-blue-300 rounded-md px-1 py-2">login</button>
        </div>
      </div>
      {/* rgith */}
      <div className="flex justify-center items-center">
        <div className="  p-3 rounded flex flex-col w-[50%]  gap-1">
          <p>creat an Account</p>
          <form>
            <label className="flex items-center justify-between" htmlFor="file">
              <img
                className="w-10 h-10"
                src="../../public/avatar.png"
                alt="img"
              />
              uplod Image
            </label>
            <input
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
              name=""
            />
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] w-full mt-2 "
              type="email"
              placeholder="email"
              name=""
            />
            <input
              className="px-1 py-2 rounded-md focus:outline-none bg-[rgba(17,25,40,0.75)] w-full mt-2 "
              type="password"
              placeholder="password"
              name=""
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
