import React from "react";
import companyImg from "../../assets/images/security.svg";

import "./companyDetails.css";

const AboutCompany = () => {
  return (
    <div className="companyDetails-container">
      <div className="companyDetails-container-headInfo">
        <div className="companyDetails-container-headInfo-headText">
          <h1>We're modernizing identity data and anti-fraud solutions</h1>
        </div>
        <div className="companyDetails-container-headInfo-para">
          <p>
            We believe in building data products that are built with the ideal
            consumer experience in mind and working toward high value solutions
            for businesses. Security and user experience shouldn’t have to be a
            tradeoff, and our solutions make fighting that dichotomy easier than
            ever before.
          </p>
        </div>
      </div>
      <div className="companyDetails-container-headImage">
        <img src={companyImg} alt="companyAboutimage" />
      </div>
    </div>
  );
};

export default AboutCompany;
