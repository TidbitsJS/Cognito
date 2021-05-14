import React from "react";

import "./aboutPlans.css";

const AboutPlans = () => {
  return (
    <div className="landing-page__about-container">
      <div className="landing-page__about-container-tipBox">
        <div className="landing-page__about-container-tipBox__cotent">
          <h2>Presenting</h2>
        </div>
      </div>

      <div className="landing-page__about-container-plansText-container">
        <div className="landing-page__about-container-plansText-container__content">
          <p>
            If you’re searching for an identity verification service, Cognito is
            designed for a high growth business to onboard more customers, more
            securely, with enterprise uptime, dependable & up-to-date data, and
            battle-tested infrastructure.
          </p>
          <p>
            Our products enable companies to meet compliance, fraud prevention,
            and trust and safety requirements Additional products like watchlist
            and PEP screening help your organization assess and combat the risks
            associated with digital identities.
          </p>
        </div>
      </div>

      <div className="landing-page__about-container__plans-container">
        <div className="landing-page__about-container__plans-container_plan">
          <div className="landing-page__about-container__plans-container_plan-icon"></div>
          <div className="landing-page__about-container__plans-container_plan-info">
            <h2>Identity</h2>
            <p>Verify customer identiy with as little as theri phone number</p>
          </div>
          <div className="landing-page__about-container__plans-container_plan-features">
            <h4>Popular Features</h4>
            <ul>
              <li>Verify SSN, age, address, phone</li>
              <li>Reduce onboarding friction</li>
              <li>Eliminate bad actors</li>
            </ul>
            <div className="landing-page__about-container__plans-container_plan-features-btn">
              <button>Take Product Tour</button>
            </div>
          </div>
        </div>

        <div className="landing-page__about-container__plans-container_plan">
          <div className="landing-page__about-container__plans-container_plan-icon"></div>
          <div className="landing-page__about-container__plans-container_plan-info">
            <h2>Screening</h2>
            <p>Verify customer identiy with as little as theri phone number</p>
          </div>
          <div className="landing-page__about-container__plans-container_plan-features">
            <h4>Popular Features</h4>
            <ul>
              <li>Verify SSN, age, address, phone</li>
              <li>Reduce onboarding friction</li>
              <li>Eliminate bad actors</li>
            </ul>
            <div className="landing-page__about-container__plans-container_plan-features-btn">
              <button>Take Product Tour</button>
            </div>
          </div>
        </div>

        <div className="landing-page__about-container__plans-container_plan">
          <div className="landing-page__about-container__plans-container_plan-icon"></div>
          <div className="landing-page__about-container__plans-container_plan-info">
            <h2>Business</h2>
            <p>Verify customer identiy with as little as theri phone number</p>
          </div>
          <div className="landing-page__about-container__plans-container_plan-features">
            <h4>Popular Features</h4>
            <ul>
              <li>Verify SSN, age, address, phone</li>
              <li>Reduce onboarding friction</li>
              <li>Eliminate bad actors</li>
            </ul>
            <div className="landing-page__about-container__plans-container_plan-features-btn">
              <button>Take Product Tour</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPlans;
