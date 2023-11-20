import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import OurCoreValue from "./components/ourCoreValues/OurCoreValues";
import Services from "./components/ourServices/OurServices";
import Team from "./pages/Team";
import OurMissionAndVision from "./components/ourVisionAndMission/OurVisionAndMission";
import About from "./pages/About";
import Join from "./pages/Join";
import Footbar from "./components/footbar/Footbar";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/our-services" element={<Services />}></Route>
        <Route path="/our-corevalues" element={<OurCoreValue />}></Route>
        <Route path="/our-team" element={<Team />}></Route>
        <Route
          path="/missionandvision"
          element={<OurMissionAndVision />}
        ></Route>
        <Route path="/join-us" element={<Join />}></Route>
      </Routes>
      <hr className="container" />
      <Footbar />
    </div>
  );
}

export default App;
