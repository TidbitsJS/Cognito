import React from "react";

import FingerprintSVG from "../../assets/images/fingerprint-animate.svg";
import "./aboutCompany.css";

const AboutCompany = () => {
  return (
    <div className="landing-page__aboutCompany__container">
      <div className="landing-page__aboutCompany__infoContainer">
        <div className="landing-page__aboutCompany__infoContainer__headText">
          <h2>Protect your businees against fraud</h2>
        </div>
        <div className="landing-page__aboutCompany__infoContainer__subText">
          <p>
            Our online ID verification service prevents fraudsters from signing
            up for your service by verifying user identities with as little as a
            name and phone number. By associating an identity with a physical
            object a person has instead of information they know, here’s no need
            to rely on inconvenient legacy solutions. Instead, use Cognito’s
            seamless identity verification service to verify your users quickly,
            without any unnecessary friction.
          </p>
        </div>
      </div>
      <div className="landing-page__aboutCompany__svgContainer">
        <img src={FingerprintSVG} alt="fingerprint-svg" />
      </div>
    </div>
  );
};

export default AboutCompany;
