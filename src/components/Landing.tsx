import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AKASH
              <br />
              <span>SUBBAIAH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Agricultural Data Management</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Plant Biotechnology</div>
              <div className="landing-h2-2">Precision Agriculture</div>
            </h2>
            <h2>
              <div className="landing-h2-info">MSc Candidate — UniLaSalle</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
