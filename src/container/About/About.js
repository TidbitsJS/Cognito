import React, { useEffect } from "react";

import CompanyDetails from "../../components/company/CompanyDetails";
import CompanyInfo from "../../components/company/CompanyInfo";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CompanyDetails />
      <CompanyInfo />
    </div>
  );
};

export default Landing;
