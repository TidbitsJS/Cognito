import React from "react";

import footerSVG from "../../assets/images/footerWave.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container-svgWave">
        <img src={footerSVG} alt="footer-SVG" />
      </div>

      <div className="footer__container__mainBox">
        <div className="footer__container__companyInfo">
          <h3>
            <strong>
              Smarter identity verification and compliance for high growth
              businesses.
            </strong>
          </h3>
        </div>

        <div className="footer__container__followUs">
          <div className="footer__container__followUs-text">
            <p>Follow us</p>
          </div>

          <div className="footer__container__followUs-accounts">
            <a href="#facebook" className="fb" title="Join us on Facebook">
              <i className="bx bxl-facebook" aria-hidden="true"></i>
            </a>
            <a href="#twitter" className="tw" title="Join us on Twitter">
              <i className="bx bxl-twitter" aria-hidden="true"></i>
            </a>
            <a href="#googlePlus" className="g-plus" title="Join us on Google+">
              <i className="bx bxl-google-plus" aria-hidden="true"></i>
            </a>
            <a href="#dribble" className="dribbble" title="Join us on Dribbble">
              <i className="bx bxl-dribbble" aria-hidden="true"></i>
            </a>
            <a href="#instagram" className="insta" title="Join us on Instagram">
              <i className="bx bxl-instagram" aria-hidden="true"></i>
            </a>
            <a href="#linkedIn" className="in" title="Join us on Linked In">
              <i className="bx bxl-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer__container__hrStyle" />

        <div className="footer__container__mainBox__linkBox">
          <div className="footer__container__mainBox__linkBox-links">
            <h4>Products</h4>
            <p>Identity</p>
            <p>Screening</p>
            <p>Business</p>
          </div>

          <div className="footer__container__mainBox__linkBox-links">
            <h4>BlockScore, Inc</h4>
            <p>Status</p>
            <p>Privacy Policy</p>
          </div>

          <div className="footer__container__mainBox__linkBox-links">
            <h4>Contact</h4>
            <p>Support</p>
            <p>Sales</p>
            <p>Security</p>
          </div>

          <div className="footer__container__mainBox__linkBox-links">
            <h4>Company</h4>
            <p>Case Studies</p>
            <p>Developers</p>
            <p>Blog</p>
            <p>About</p>
          </div>
        </div>

        <div className="footer__container__hrStyle" />

        <div className="footer__container__copyright">
          <p>?? 2021 BlockScore, Inc. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
