import React from "react";
import about from "../../../../Utilities/About/about.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="bg-light d-flex flex-md-row flex-column">
      {/* image */}
      <img className="d-block aboutImage" src={about} alt="First slide" />
      {/* content */}
      <div className=" d-flex flex-column justify-content-center aboutContent">
        <h2 className="content-title">
          Real-time workouts for every fitness level
        </h2>
        <h5 className="content-detail">
          Smash real-time HIIT workouts that fit perfectly with where you are on
          your journey. Enjoy new, more challenging workouts every four-week
          cycle. And revisit your favourite past workouts anytime.
        </h5>
      </div>
    </div>
  );
};

export default About;
