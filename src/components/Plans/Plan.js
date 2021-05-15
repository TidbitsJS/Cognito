import React from "react";

import "./plan.css";

const Plan = (props) => {
  const { type, url, title, text, features, btnName } = props.plan;
  return (
    <>
      <div className="company__plans-container_plan">
        <div className="company__plans-container_plan-icon">
          <img src={url} alt="otpPNG" />
        </div>
        <div className="company__plans-container_plan-type">
          <p>{type}</p>
        </div>
        <div className="company__plans-container_plan-info">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="company__plans-container_plan-features">
          <h4>Popular Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={feature + index}>{feature}</li>
            ))}
          </ul>
          <div className="company__plans-container_plan-features-btn">
            <button>{btnName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
