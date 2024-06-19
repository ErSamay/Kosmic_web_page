import Chakkra1 from "../assets/Chakkra.png";
import "../App.css"

function RightPage() {
  return (
    <div className="lg:w-1/2 lg:h-full bg-[#15444f] overflow-hidden relative flex items-center justify-center h-screen w-screen ">
      <div className="lg:h-[80vh] lg:w-[80vh] h-64 w-80  absolute lg:top-20 md:top-40 bottom-8 -left-20 lg:-left-36 md:h-72 md:w-96">
        <img
          src={Chakkra1}
          alt="Chakkra"
          className="rotateChakkar  opacity-20 "
        />
      </div>
      <div className="lg:h-72 lg:w-72  h-40 w-48 absolute  top-2 lg:-right-20 -right-12">
        <img
          src={Chakkra1}
          alt="Chakkra"
          className="rotateChakkar1 opacity-20 "
        />
      </div>
      <div className="text-white text-xl lg:text-3xl lg:w-96 w-60 md:text-3xl md:w-96 md:ml-32 ml-5 mb-20 lg:mb-0">
        <h1 className="font-bold">Starry-eyed and ready to vibe? We've got your kosmic fix!</h1>
      </div>
    </div>
  );
}

export default RightPage;
