/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import MainWebPage from "./Components/MainWebPage";

import ReactGA from "react-ga4";
const Tracking_id = "G-Q6H3FSLLJG";
ReactGA.initialize(Tracking_id);
function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
  });
  return (
    <>
      <MainWebPage />
    </>
  );
}

export default App;
