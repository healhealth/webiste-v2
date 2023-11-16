import "./Home.css";
import bg from "../../assets/bg.jpg";
import OurMissionAndVision from "../ourVisionAndMission/OurVisionAndMission";
import OurCoreValues from "../ourCoreValues/OurCoreValues";
const Home = () => (
  <div className="home">
    <div className="img-container">
      <img className="bg-img" src={bg} alt="" />
    </div>
    <OurMissionAndVision />
  </div>
);

export default Home;
