
function Footer() {
  return (
    <div>
      <div className="h-[10vh] flex item-center justify-center">
        <div className="flex items-center justify-center">
          <div>
            <p className="lg:text-sm text-xs  text-white pl-4 lg:pl-0">
              &copy;Kosmic SuperAstro rights reserved.{" "}
            </p>
          </div>
          <div className="pl-2 flex items-center justify-center text-white  pt-0.5 lg:block hidden md:block">
            <i className="ri-linkedin-box-line p-1"></i>
            <i className="ri-instagram-line p-1"></i>
            <i className="ri-twitter-line p-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer