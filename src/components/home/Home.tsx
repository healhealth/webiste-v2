import "./Home.css";
import bg from "../../assets/bg.jpg";
import OurVisionAndMission from "../ourVisionAndMission/OurVisionAndMission";

const Home = () => (
  <div className="home">
    <div className="container-sm">
      <div className="img-container">
        <img className="bg-img" src={bg} alt="" />
      </div>
      <OurVisionAndMission />
    </div>
  </div>
);

export default Home;
