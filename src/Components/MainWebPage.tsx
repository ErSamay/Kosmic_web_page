
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

function MainWebPage() {
  return (
    <>
      <div className="lg:h-screen lg:w-screen bg-white flex flex-col items-center justify-center lg:flex-row overflow-x-hidden">
        <LeftPage/>
        <RightPage/>
      </div>
    </>
  );
}

export default MainWebPage