import React from "react";
import { Box,  Flex,  Center } from "@chakra-ui/react";
import "./Navbar.css";
const Navbar = () => {

  return (
    <Box
   
      position="relative"
      top={0}
      height="15vh"
      width="100%"
      zIndex={10}
    >
      
      <Flex  /*shadow="lg"*/ h="auto" justifyContent="center" alignItems="center" p={2}  >
      <Center  >
      <h1  className="logo-heading"    >{"{toolshed}"}</h1>
      </Center>
      


        
        </Flex>
      
    </Box>
  );
};

export default Navbar;
