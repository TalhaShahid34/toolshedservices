import { Center, Heading, VStack, Text, Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import "./About.css";
const About = (ref) => {
  // console.log(ref);

  return (
    <>
      <Text color="#F7B896" className="about-text">
        Toolshed provides practical solutions in Retool, Data, Automation, and
        Low-code to streamline and automate business operations. Our founders,
        experienced tech leaders from Y Combinator-backed companies, established
        our firm in Lahore with a focus on precision and practicality. We excel
        in transforming vague requirement
      </Text>
    </>
  );
};

export default About;
