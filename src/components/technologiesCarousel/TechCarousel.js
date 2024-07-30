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
    name: "GraphQL",
    link: "https://GraphQL.org",

    image: Gql,
  },
  {
    name: "MySQL",
    link: "https://MySql.com",

    image: MySql,
  },
  {
    name: "Retool",
    link: "https://Retool.com",

    image: retool_logo_black,
  },
  {
    name: "dbt",
    link: "https://dbt.com",

    image: Dbt,
  },
  {
    name: "Looker",
    link: "https://Looker.com",

    image: GoogleLooker,
  },
  {
    link: "https://React.com",
    name: "React",
    image: React,
  },
  {
    name: "Python",
    link: "https://Python.org",

    image: Python,
  },
  {
    name: "PostgreSQL",
    link: "https://Postgresql.com",

    image: Postgresql,
  },
  {
    name: "BigQuery",
    link: "https://BigQuery.org",

    image: bq,
  },
  {
    name: "Airbyte",
    link: "https://AirByte.com",
    image: AirByte,
  },
];
const images = technologies.map((tech) => tech.image);
const TechCarousel = () => {
  return (
    <Box h="20vh" pt="5px" pb="10px">
      <HorizontalCarousel images={technologies} />
    </Box>
  );
};

export default TechCarousel;
