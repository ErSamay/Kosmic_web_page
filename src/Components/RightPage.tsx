
import westernAstro from "../assets/WesternAstrologyIcon.svg";

import "../App.css"

function RightPage() {
  return (
    <div className="lg:w-1/2 lg:h-full bg-[#15444f] overflow-hidden relative flex items-center justify-center h-screen w-screen ">
      <div className="h-[10vh]"></div>
      <div className="h-[80vh] flex   justify-center items-center">
        <div className="text-white text-xl lg:text-3xl  w-60 md:text-3xl md:w-96 md:ml-32 ml-5 h-[10vh]  lg:h-[30vh] flex flex-col items-center justify-center ">
          <div className="h-[33vh] ">
            <h1 className="font-bold ">
              Starry-eyed and ready to vibe? We've got your kosmic fix!
            </h1>
          </div>
          <div className="h-[33vh] "></div>
          <div className="h-[33vh"></div>
        </div>
      </div>
      <div className="h-[10vh]"></div>
      <div className="lg:h-[80vh] lg:w-[80vh] h-64 w-80  absolute   md:top-40  -left-20 lg:-left-32 md:h-72 md:w-96">
        <img
          src={westernAstro}
          alt="Chakkra"
          className="rotateChakkar lg:h-[100vh] lg:w-[100vh]"
        />
      </div>
      <div className="lg:h-72 lg:w-72  h-40 w-48 absolute  -top-9 lg:-right-20 -right-12">
        <img
          src={westernAstro}
          alt="Chakkra"
          className="rotateChakkar1 h-full w-full "
        />
      </div>
    </div>
  );
}

export default RightPage;
