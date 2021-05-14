import React from "react";
import AboutCompany from "../../components/Landing/AboutCompany";
import AboutPlans from "../../components/Landing/AboutPlans";
import Welcome from "../../components/Landing/Welcome";

const Landing = () => {
  return (
    <div>
      <Welcome />
      <AboutPlans />
      <AboutCompany />
    </div>
  );
};

export default Landing;
