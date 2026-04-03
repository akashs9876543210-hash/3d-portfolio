import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/akash-subbaiah-a5739838b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — akash-subbaiah-a5739838b
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:akash.subbaiah@etu.unilasalle.fr" data-cursor="disable">
                akash.subbaiah@etu.unilasalle.fr
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MSc Agricultural and Food Data Management, UniLaSalle — present
            </p>
            <p>
              Foundation in Plant Biology & Plant Biotechnology
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/akash-subbaiah-a5739838b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn — akash-subbaiah-a5739838b <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Akash Subbaiah</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
