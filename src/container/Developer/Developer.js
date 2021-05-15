import React, { useEffect } from "react";
import Documentation from "../../components/documentation/Documentation";

const Developer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Documentation />
    </div>
  );
};

export default Developer;
