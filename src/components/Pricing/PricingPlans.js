import React from "react";

import Plan from "../../components/Plans/Plan";
import data from "./PricingPlansData";
import "./pricingPlans.css";

const PricingPlans = () => {
  return (
    <div className="pricing-page__container">
      <div className="pricing-page__container__text">
        <h2>Pricing that scales</h2>
        <p>
          Start integrating in minutes and receive pricing that works for your
          use case.
        </p>
      </div>
      <div className="pricing-page__container__plans-container">
        {data.map((plan, index) => (
          <Plan plan={plan} key={plan.title + index} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
