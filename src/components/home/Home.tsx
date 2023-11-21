import "./Home.css";

import OurVisionAndMission from "../ourVisionAndMission/OurVisionAndMission";

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="background-text-container">
        <p>Democratizing Mental Well-Being</p>
      </div>
    </div>
    <div className="container-sm">
      <OurVisionAndMission />
    </div>
  </div>
);

export default Home;
