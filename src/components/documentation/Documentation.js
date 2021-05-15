import React from "react";
import Content from "./Content";

import "./documentation.css";

const Documentation = () => {
  return (
    <div className="developer-page__container">
      <div className="developer-page__container_text">
        <h2>API Documentation</h2>
      </div>

      <div className="developer-page__container-line"></div>

      <div className="developer-page__container__contentBox">
        <div className="developer-page__container__index">
          <div className="developer-page__container__index-name">
            <a href="#started">Getting Started</a>
          </div>
          <div className="developer-page__container__index-name">
            <a href="#changelog">Changelog</a>
          </div>
          <div className="developer-page__container__index-name">
            <a href="#idVerified">ID Verification</a>
          </div>
          <div className="developer-page__container__index-name">
            <a href="#kycVerified">KYC Verification</a>
          </div>
          <div className="developer-page__container__index-name">
            <a href="#otpVerified">OTP Verification</a>
          </div>
        </div>
        <div className="developer-page__container__content">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
