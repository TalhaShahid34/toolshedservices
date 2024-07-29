import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import retool_logo_black from "../../images/retool_logo_black.png";
import Dbt from "../../images/Dbt.png";
import GoogleLooker from "../../images/GoogleLooker.png";
import React from "../../images/React.png";
import Python from "../../images/Python.png";
import Postgresql from "../../images/Postgresql.png";
import bq from "../../images/bq.png";
import AirByte from "../../images/AirByte.png";
import MySql from "../../images/MySql.png";
import Gql from "../../images/Gql.png";
import "react-fancy-circular-carousel/FancyCarousel.css";
import HorizontalCarousel from "./HorizontalCarousel";
const technologies = [
  {
    // name: "GraphQL",
    image: Gql,
  },
  {
    // name: "Retool",
    image: MySql,
  },
  {
    // name: "Retool",
    image: retool_logo_black,
  },
  {
    // name: "Looker",
    image: Dbt,
  },
  {
    // name: "Looker",
    image: GoogleLooker,
  },
  {
    // name: "React",
    image: React,
  },
  {
    // name: "Python",
    image: Python,
  },
  {
    // name: "GoogleBigQuery",
    image: Postgresql,
  },
  {
    // name: "BigQuery
    image: bq,
  },
  {
    // name: "AirByte",
    image: AirByte,
  },
];
const images = technologies.map((tech) => tech.image);
const TechCarousel = () => {
  return (
    <Box h="20vh" pt="5px" pb="10px">
      <HorizontalCarousel images={images} />
    </Box>
  );
};

export default TechCarousel;
