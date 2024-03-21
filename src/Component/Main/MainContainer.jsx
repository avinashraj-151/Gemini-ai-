import { assets } from "../../assets/assets";
import { MdOutlineDraw } from "react-icons/md";
function MainContainer() {
  return (
    <div>
      <div className="max-w-[900px] mx-auto">
        <div className="mx-0 my-5 text-6xl text-[#c4c7c5] font-medium">
          <p>
            <span className="greet">Hello,Avinash</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="max-w-[900px] m-auto grid grid-flow-col gap-4 p-5 ">
          {/* card */}
          <div className="relative bg-[#f0f4f9] h-52 p-4 rounded-xl cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-xl">
              Find YouTube videos with inspiring best man speeches
            </p>
            <img
              className="absolute icon_css w-10"
              src={assets.youtube_icon}
            ></img>
          </div>
          <div className=" rounded-xl relative bg-[#f0f4f9] h-52 p-4 cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-xl">
              Ideas to surprise a friend on their birthday
            </p>
            {/* <img
                className="absolute icon_css w-10"
                src={assets.compass_icon}
              ></img> */}
            <span className="material-symbols-outlined absolute icon_css w-10">
              explore
            </span>
          </div>
          <div className=" rounded-xl relative  bg-[#f0f4f9] h-52 p-4 cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-xl">
              Help me draft a response to a friend
            </p>
            {/* <img className ="absolute bg-white w-10"src=""></img> */}
            <span className="material-symbols-outlined icon_css">draw</span>
          </div>
          <div className=" rounded-xl relative bg-[#f0f4f9] h-52 p-4 cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-xl">
              What’s the reaction to and impact of autonomous vehicles
            </p>
            <span className="material-symbols-outlined icon_css">
              lightbulb
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
