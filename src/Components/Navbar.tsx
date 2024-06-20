/* eslint-disable react/react-in-jsx-scope */
import WesternAstrologyIcon2 from "../assets/WesternAstrologyIcon2.svg";

function Navbar() {
  return (
    <>
      <div className="h-[10%] pt-5 pl-5 pr-1 pb-1 ">
        <div className="h-[7vh] w-[7vh] rounded-full  flex items-center  justify-center relative">
          <img
            src={WesternAstrologyIcon2}
            alt=""
            className="rounded-full  rotateChakkar  absolute"
          />
          <h1 className="text-[#10292e] z-10 font-bold text-xl">K</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
