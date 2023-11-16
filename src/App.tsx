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
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/corevalues" element={<OurCoreValue />}></Route>
        <Route path="/ourteam" element={<Team />}></Route>
        <Route
          path="/missionandvision"
          element={<OurMissionAndVision />}
        ></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
      {/* <Divider sx={{ color: "oklch(65.59% 0.118 181)", marginTop: "2em" }} /> */}
      <Footbar />
    </div>
  );
}

export default App;
