import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Researcher (Agroecology &amp; Data Science)</h4>
                <h5>UniLaSalle — Beauvais, France</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Acting as a researcher in agroecology and data science. I analyze
              the performance of multispecific cover crops to maximize biomass
              and ecosystem services, combining spatial and tabular data with
              statistical and machine learning methods.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Technical Support</h4>
                <h5>ICMR - National Institute for Research in Tuberculosis — Chennai, India</h5>
              </div>
              <h3>Former</h3>
            </div>
            <p>
              Provided technical support for research projects, managing datasets,
              troubleshooting analysis pipelines, and supporting lab–data
              integration efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
