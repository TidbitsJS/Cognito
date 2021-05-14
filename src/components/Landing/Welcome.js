import React from "react";

import welcomeSVG from "../../assets/images/verified-animate.svg";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="landing-page__welcome__container">
      <div className="landing-page__welcome__svg-container">
        <img src={welcomeSVG} alt="welcome-svg" />
      </div>
      <div className="landing-page__welcome__dotted-line"></div>
      <div className="landing-page__welcome__info-container">
        <div className="landing-page__welcome__info-container__heading">
          <h2>There’s a better way to verify your customers.</h2>
        </div>

        <div className="landing-page__welcome__info-container__subHeading">
          <p>
            Smarter identity verification services and compliance solutions.
          </p>
          <p>
            If you’re searching for an identity verification service, Cognito is
            designed for a high growth business to onboard more customers, more
            securely, with enterprise uptime, dependable & up-to-date data, and
            battle-tested infrastructure.
          </p>
        </div>

        <div className="landing-page__welcome__info-container__buttons">
          <button className="btn-ripple">Try it for Free</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
