import React from "react";
import Comman from "./Comman";

function About() {
  return (
    <Comman
      name="Welcome to about page"
      src={`${process.env.PUBLIC_URL}/download.jpg`}
      visit="/contact"
      btname="Contact Now"
    />
  );
}

export default About;
