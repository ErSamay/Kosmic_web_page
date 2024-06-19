import backgroundImage from "../assets/backgroundImage.png"

function Navbar() {
  return (
    <>
      <div className="h-[10vh] pt-5 pl-5 pr-1 pb-1 ">
        <div className="h-[7vh] w-[7vh] rounded-full  flex items-center  justify-center relative">
          <img
            src={backgroundImage}
            alt=""
            className="rounded-full z-10 rotateChakkar opacity-40 absolute"
          />
          <h1>K</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar