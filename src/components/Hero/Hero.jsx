import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="hero__background"></div>
        <div className="hero__pop">
          <h2>Delicius Food, Delivered To You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            possimus ab itaque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            exercitationem soluta provident iusto?
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
