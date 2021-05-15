import React, { useEffect } from "react";

import AboutCompany from "../../components/Landing/AboutCompany";
import AboutPlans from "../../components/Landing/AboutPlans";
import Welcome from "../../components/Landing/Welcome";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Welcome />
      <AboutPlans />
      <AboutCompany />
    </div>
  );
};

export default Landing;
