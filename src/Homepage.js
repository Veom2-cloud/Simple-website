import React from "react";
import Comman from "./Comman";

function Homepage() {
  return (
    <Comman
      name="Grow our business with"
      src={`${process.env.PUBLIC_URL}/download.jpg`}
      visit="/service"
      btname="Get Started"
    />
  );
}

export default Homepage;
