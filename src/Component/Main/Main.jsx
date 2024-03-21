import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import MainContainer from "./MainContainer";
const Main = () => {
  const {
    onSent,
    recent_prompt,
    showresult,
    loading,
    result,
    setinput,
    input,
  } = useContext(Context);
  useEffect(() => {
    // const currentLocation = navigator.geolocation.getCurrentPosition();
    // console.log(currentLocation);
  }, []);

  return (
    // main
    <div className="flex-1 flex-col min-h-screen  overflow-hidden relative">
      {/* nav */}
      <div className="h-[10%] ">
        <nav className="flex flex-row justify-between items-center p-4">
          <p className="text-[#585858] text-xl">Gemini</p>
          <img
            src={assets.user_icon}
            className="w-10 rounded-3xl cursor-pointer"
          ></img>
        </nav>
      </div>
      {/* main container */}
      {!showresult ? (
        <div className="h-[70%]">
          <MainContainer></MainContainer>
        </div>
      ) : (
        <div className="h-[70%] overflow-auto scrollbar_css">
          <div className="max-w-[900px] mx-auto">
            <div className="mx-[5%] my-0 max-h-[70vh]">
              <div className="flex gap-4 items-center mb-5">
                <img
                  src={assets.user_icon}
                  className="w-6 h-6 rounded-xl"
                ></img>
                <p>{recent_prompt}</p>
              </div>
              <div className="flex flex-col justify-items-start gap-4">
                <img src={assets.gemini_icon} className="w-8"></img>
                {loading ? (
                  <div className="w-full flex flex-col gap-3">
                    <hr className="hr_css"></hr>
                    <hr className="hr_css"></hr>
                    <hr className="hr_css"></hr>
                  </div>
                ) : (
                  <p
                    className="text-xl font-light"
                    dangerouslySetInnerHTML={{ __html: result }}
                  ></p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      <div className="h-[10%]">
        <div className="max-w-[900px] m-auto">
          <div className="bottom-0 px-5">
            <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] px-5 py-2 rounded-3xl w-full">
              <input
                type="text"
                placeholder="Enter a prompt here"
                className="flex-1 bg-transparent border-none outline-none  text-xl p-3"
                value={input}
                onChange={(e) => {
                  setinput(e.target.value);
                }}
              ></input>
              <div className="flex items-center gap-4">
                <img
                  src={assets.gallery_icon}
                  className=" cursor-pointer w-6"
                ></img>
                <img
                  src={assets.mic_icon}
                  className=" cursor-pointer w-6"
                ></img>
                <img
                  onClick={onSent}
                  src={assets.send_icon}
                  className=" cursor-pointer w-6"
                ></img>
              </div>
            </div>
            <div className="text-xs mx-auto text-center font-light py-1">
              <p>
                Gemini may display inaccurate info, including about people, so
                double-check its responses.
                <a href="https://support.google.com/gemini/answer/13594961?visit_id=638462048361877554-2997628864&p=privacy_notice&rd=1#privacy_notice">
                  Your privacy & Gemini Apps
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
