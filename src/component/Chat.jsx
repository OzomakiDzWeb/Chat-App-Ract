import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { IoIosAlert } from "react-icons/io";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import ItmChat from "./itmChat";
const Chat = () => {
  const [OpnImoGi, setOpnImoGi] = useState(false);
  const [messag, setmessag] = useState("");
  const handelEmoji = (e) => {
    setmessag((prev) => prev + e.emoji);
    setOpnImoGi(false);
    console.log(messag);
  };
  return (
    <div className="flex-1  flex flex-col justify-between">
      {/* top */}
      <div className="flex justify-between items-center border-b px-3 ">
        <div>
          <ItmChat />
        </div>
        <div className="flex gap-3">
          <FaPhoneAlt />
          <IoVideocam />
          <IoIosAlert />
        </div>
      </div>
      {/* center */}
      <div className="">
        {/* ms1 */}
        <div className="flex gap-1">
          <img
            className="h-10 rounded-full"
            src="../../public/avatar.png"
            alt="user"
          />

          <div>
            <p className="p-2 bg-black rounded-md text-xs w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at,
              itaqr obcaecati officiis assumenda magnam adipisci mollitia cumque
              labore culpa aspernatur quae veritatis quo voluptatibus, quam
              voluptas quas!
            </p>
            <span className="text-xs">1min ago</span>
          </div>
        </div>
        {/* ms2 */}
        <div className="flex flex-col  items-end my-2">
          <p className="p-2 bg-blue-300 rounded-md text-xs w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at,
            itaque corrupti error obcaecati officiis assumenda magnam adipisci
            mollitia cumque labore culpa aspernatur quae veritatis quo
            voluptatibus, quam voluptas quas!
          </p>
          <span className="text-xs">1min ago</span>
        </div>
      </div>
      {/* bottom */}
      <div className="relative border-t px-3 mt-10 flex justify-between items-center gap-1 py-2">
        <div className="flex gap-2">
          <MdOutlineAddPhotoAlternate size={20} />
          <FaCamera size={20} />
          <CiMicrophoneOn size={20} />
        </div>
        <input
          value={messag}
          onChange={(e) => setmessag(e.target.value)}
          className="bg-[rgba(17,25,40,0.75)] rounded-sm focus:outline-none py-1 px-2"
          type="text"
          placeholder="tapes meesage"
        />
        <div className="flex items-center gap-2">
          <FaSmile
            className="cursor-pointer"
            onClick={() => setOpnImoGi(!OpnImoGi)}
            size={20}
          />
          <button className="bg-blue-400 rounded px-1">send</button>
        </div>
        <div className="bottom-14  absolute">
          <EmojiPicker
            onEmojiClick={handelEmoji}
            className={`${OpnImoGi ? "opacity-100" : "opacity-0"} `}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
