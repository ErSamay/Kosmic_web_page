import { useState , useEffect } from "react";
import Footer from "./Footer";
import Layout from "./Layout";

declare global {
  interface Window {
    onloadTurnstileCallback: () => void;
  }
}
interface TurnstileInstance {
  render: (
    selector: string,
    options: {
      sitekey: string;
      callback: () => void;
    }
  ) => void;
}

declare const turnstile: TurnstileInstance;

function LeftPage() {
  const [formData, setFormData] = useState({ email: ""});
  const [showTurnstile, setShowTurnstile] = useState(false);

useEffect(() => {
  if (showTurnstile) {
    turnstile.render("#example-container", {
      sitekey: "1x00000000000000000000AA",
      callback: () => {
      
        setShowTurnstile(false);
      },
    });
  }
  return () => {
    if (showTurnstile) {
      setShowTurnstile(false);
    }
  };
}, [showTurnstile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
    const data = new FormData();

    data.append("email", formData.email);
   

    const Sheet_Url =
      "https://docs.google.com/spreadsheets/d/1ui5m6WZ8H_jArW_F9KMYvOp-D_-sWuTAHPJlwnr9jiw/edit?gid=0#gid=0";
    try {
      await fetch(Sheet_Url, {
        method: "POST",
        body: data,
      });

      console.log("Email and token submitted successfully");
      setFormData({ email: ""}); 
    } catch (error) {
      console.log(error);
    }
     setShowTurnstile(true);
  };
  return (
    <>
      <div className="lg:w-1/2 h-screen w-screen bg-[#00515F] overflow-hidden lg:overflow-hidden">
        <Layout />
        <div className="h-[80vh] flex items-center justify-center">
          <div className="h-full lg:w-[80%] w-full  flex flex-col items-center justify-center leading-40">
            <h1 className="lg:text-4xl text-2xl md:text-4xl  text-white font-semibold lg:w-[70%] w-[95%] w-full text-center lg:my-3 my-4 ">
              Subscribe for Kosmic launch invite.
            </h1>
            <p className="lg:text-sm text-xs text-white lg:w-[70%] w-[90%] text-center lg:my-3 my-4 opacity-70">
              Be notified when we launch our services for limited number of
              users.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative my-3 lg:block md:block hidden">
                <input
                  className="lg:pr-36 md:pr-36 pr-20 pl-2 pt-2 pb-2 rounded-2xl bg-white text-black md:text-sm lg:text-sm text-xs"
                  placeholder="Type your email address "
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <button
                  className="bg-[#3eb4c9] text-white lg:pr-7 md:pr-7 pr-2 md:pl-7 lg:pl-7 pl-2 pt-2 pb-2 rounded-2xl absolute md:text-sm  lg:text-sm text-xs right-0"
                  type="submit"
                >
                  sign me up
                </button>
                <div
                  id="example-container"
                  className="cf-turnstile pt-3 pl-1 lg:block md:block hidden"
                  data-sitekey="1x00000000000000000000AA"
                ></div>
              </div>
            </form>
            <form onSubmit={handleSubmit} className="lg:hidden md:hidden block">
              <div className="relative my-3 lg:hidden md:hidden block flex flex-col border border-1 border-black p-2 border-opacity-10 ">
                <input
                  className=" pr-8 pl-2 pt-2 pb-2 rounded-2xl bg-white text-black  text-xs"
                  placeholder="Type your email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  
                />

                <button
                  className="bg-[#3eb4c9] text-white pt-1 pb-1 rounded-2xl  text-xs right-0 w-20 ml-auto mt-2"
                  type="submit"
                >
                  sign up
                </button>
                <div
                  id="example-container"
                  className="cf-turnstile pt-3 pl-1 lg:hidden md:hidden block"
                  data-sitekey="1x00000000000000000000AA"
                ></div>
              </div>
            </form>

            <p className="text-[#3eb4c9] lg:text-sm text-xs h-5 pl-4 lg:pl-0 "></p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LeftPage;
