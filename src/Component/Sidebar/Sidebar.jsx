import { useState } from "react";
import { assets } from "../../assets/assets.js";
import { IoMenu } from "react-icons/io5";
import { LuPlus, LuMenu } from "react-icons/lu";
import newlog from "../../assets/bard_new.png";
const Sidebar = () => {
  const [extended, setextended] = useState(false);
  function handelextended() {
    // console.log("clicked button");
    setextended(!extended);
  }
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#f0f4f9] px-4 py-6 ">
      {/* top */}
      <div className="flex flex-col">
        <div className="p-3 w-12 hover:bg-[#e6eaf1] cursor-pointer rounded-full">
          <img
            src={assets.menu_icon}
            className="w-5 cursor-pointer"
            onClick={handelextended}
          ></img>
        </div>
        {/* new chat */}
        <div className="flex items-center mt-12 p-3 gap-3  bg-[#e6eaf1] rounded-3xl text-base text-black cursor-pointer hover:bg-gray-300">
          <LuPlus className="w-6 h-6 justify-items-center justify-center flex items-center"></LuPlus>
          {/* <img
            src={assets.plus_icon}
            className="w-5 justify-center items-center"
          ></img> */}
          {extended ? <p>New chat</p> : null}
        </div>
        {/* Recent */}
        {extended ? (
          <div className="flex flex-col p-1">
            <p className=" mt-5 mb-5 p-1">Recent</p>
            {/* Recent entries */}
            <div className="flex flex-row justify-self-start items-center gap-3 p-2 pr-10 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img
                src={assets.message_icon}
                alt="message_icon"
                className="w-5"
              ></img>
              <p>What is react</p>
            </div>
          </div>
        ) : null}
      </div>
      {/* bottom */}
      <div className="flex flex-col">
        {/* bottom items */}
        <div className="flex flex-row gap-5 mb-2 hover:bg-[#e2e6eb] p-3 rounded-3xl cursor-pointer">
          <img
            src={assets.question_icon}
            alt="search_icon"
            className="w-5"
          ></img>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="flex flex-row gap-5 mb-2 hover:bg-[#e2e6eb] p-3 rounded-3xl cursor-pointer">
          <img
            src={assets.history_icon}
            alt="search_icon"
            className="w-5"
          ></img>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="flex flex-row gap-5 mb-2 hover:bg-[#e2e6eb] p-3 rounded-3xl cursor-pointer">
          <img
            src={assets.setting_icon}
            alt="search_icon"
            className="w-5"
          ></img>
          {extended ? <p>Settings</p> : null}
        </div>
        {extended && (
          <a
            href="https://gemini.google.com/advanced"
            target="_blank"
            className="outline-none border-none no-underline"
          >
            <div className="flex flex-row cursor-pointer  p-3 rounded-2xl hover:bg-[#dadce0] bg-[#e6eaf1] justify-items-start justify-center gap-3">
              <img src={newlog} alt="newlog" className="w-4"></img>
              <p className="text-sm text-black">upgrade Gemini Advanced </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
