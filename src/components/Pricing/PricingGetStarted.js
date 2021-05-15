import React from "react";

import startSVG from "../../assets/images/start.svg";
import "./pricingGetStarted.css";

const PricingGetStarted = () => {
  return (
    <div className="pricing-page__get-started__container">
      <div className="pricing-page__get-started__container-lightBox">
        <div className="pricing-page__get-started__container-lightBox-infoContainer">
          <div className="pricing-page__get-started__container-lightBox__infoContainer-texts">
            <h2>Ready to get started?</h2>
            <p>
              Talk to someone on our team to get expert advice on how to improve
              onboarding conversions while decreasing fraud.
            </p>
          </div>
          <div className="pricing-page__get-started__container-lightBox__infoContainer-buttons">
            <button>Contact Sales</button>
          </div>
        </div>

        <div className="pricing-page__get-started__container-lightBox-svgContainer">
          <img src={startSVG} alt="start-SVG" />
        </div>
      </div>
    </div>
  );
};

export default PricingGetStarted;
