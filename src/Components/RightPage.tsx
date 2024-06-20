/* eslint-disable react/react-in-jsx-scope */
import westernAstro from "../assets/WesternAstrologyIcon.svg";

import "../App.css";

function RightPage() {
  return (
    <>
      <div className="lg:w-1/2 lg:h-full h-screen w-screen bg-[#15444f] overflow-hidden lg:overflow-hidden relative">
        <div className="h-[10%] pt-5 pl-5 pr-1 pb-1 ">
          <div className="h-[7vh] w-[7vh] rounded-full  flex items-center  justify-center relative"></div>
        </div>
        <div className="h-[80%]  flex items-end justify-center">
          <div className=" lg:w-[80%] w-full  flex flex-col items-center justify-center lg:h-[70%]  ">
            <div className="h-[34%]  flex items-center justify-center">
              <h1 className="lg:text-5xl text-2xl md:text-5xl  text-white font-semibold  lg:w-[85%] w-[95%]  text-center mt-12">
                Starry-eyed and ready to vibe? We've got your cosmic fix!
              </h1>
            </div>
            <div className="h-[66%] max-w-[90%] flex flex-col items-center justify-start mt-6"></div>
          </div>
        </div>
        <div className="h-[10vh] flex item-center justify-center"></div>
        <div className="lg:h-[100vh] lg:w-[100vh] h-[95vh] w-[95vh] h-64 w-80  absolute top-96  lg:top-64   -left-20 lg:-left-56  md:h-72 md:w-96">
          <img
            src={westernAstro}
            alt="Chakkra"
            className="rotateChakkar lg:h-[100vh] lg:w-[100vh]"
          />
        </div>
        <div className="lg:h-72 lg:w-72  h-40 w-48 absolute  -top-16 lg:-right-24 -right-12">
          <img
            src={westernAstro}
            alt="Chakkra"
            className="rotateChakkar1 h-full w-full "
          />
        </div>
      </div>
    </>
  );
}

export default RightPage;
