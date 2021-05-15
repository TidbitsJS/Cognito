import React, { useEffect } from "react";

import PricingGetStarted from "../../components/Pricing/PricingGetStarted";
import PricingPlans from "../../components/Pricing/PricingPlans";

export const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PricingPlans />
      <PricingGetStarted />
    </div>
  );
};
