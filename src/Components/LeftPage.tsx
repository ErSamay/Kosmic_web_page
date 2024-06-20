import { useState , useEffect } from "react";
import React from "react";
import log from "loglevel";
import { fetchLeads } from "../api";
import Footer from "./Footer";
import Layout from "./Layout";


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
        fetchLeads(formData.email)
          .then((data) => {
               log.info("Leads data:", data);
                setFormData({ email: "" });
                 setTimeout(() => {
                   setShowTurnstile(false);
                 }, 10000); 
          })
          .catch((error) => {
             log.error("Error fetching leads:", error);
             setFormData({ email: "" }); 
              setTimeout(() => {
                setShowTurnstile(false); 
              }, 10000); 
          });
      },
    });
  }
  return () => {
    if (showTurnstile) {
      setShowTurnstile(false);
    }
  };
}, [showTurnstile, formData.email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     setShowTurnstile(true);
  };
  return (
    <>
      <div className="lg:w-1/2 h-screen w-screen bg-[#00515F] overflow-hidden lg:overflow-hidden">
        <Layout />
        <div className="h-[80vh] flex items-center justify-center">
          <div className=" lg:w-[80%] w-full  flex flex-col items-center justify-center leading-40 lg:h-[30vh] h-5">
            <div className="h-[33vh]  flex items-center justify-center">
              <h1 className="lg:text-3xl text-2xl md:text-3xl  text-white font-bold lg:w-[85%] w-[95%] w-full text-center ">
                Subscribe for Kosmic launch invite.
              </h1>
            </div>
            <div className="h-[66vh] mt-2  w-[60%] flex flex-col items-center justify-center ">
              <p className="lg:text-xl text-xs text-white  text-center  opacity-70 w-full">
                Be notified when we launch our services for limited number of
                users.
              </p>
              <form
                onSubmit={handleSubmit}
                className="relative w-full mt-6 lg:block md:block hidden"
              >
                <input
                  className="relative rounded-2xl w-full bg-white text-black md:text-sm lg:text-sm text-xs lg:pr-7 md:pr-7 pr-2 md:pl-7 lg:pl-7 pl-2 pt-2 pb-2"
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
                  className="cf-turnstile pt-3 pl-1"
                  data-sitekey="1x00000000000000000000AA"
                ></div>
              </form>
              <form onSubmit={handleSubmit}>
                <div className="relative my-3 lg:hidden md:hidden block flex flex-col border border-1 border-black pt-3 pb-3 pr-3 pl-3 w-56 border-opacity-10 ">
                  <input
                    className=" pr-20 pl-2 pt-2 pb-2 rounded-2xl bg-white text-black  text-xs"
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
                </div>
              </form>

              <p className="text-[#3eb4c9] lg:text-sm text-xs h-5 pl-4 lg:pl-0 "></p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LeftPage;
