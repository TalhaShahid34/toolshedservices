import {
  Box,
  Center,
  Flex,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Home.css";
import "react-fancy-circular-carousel/FancyCarousel.css";

//components
import Contact from "../components/contact/Contact";
import SuccessModal from "../components/contact/SuccessModal";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import TechCarousel from "../components/technologiesCarousel/TechCarousel";
import CustomModal from "../components/contact/Modal";

const HomePage = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1000px)");

  //Contact Form Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleContactSubmit = () => {
    onClose();
    console.log("Contact form submitted");
    setShowSuccessModal(true);
    onOpen();
  };

  return (
    <>
      <Box id="home" position="relative" height="100vh">
        <Box
          id="background"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          height="100vh"
          // bg="linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)"
          className="background"
          zIndex={-1}
        />
        <Flex h="100vh" direction="column">
          <Navbar />

          <Flex
            h="65vh"
            alignItems="center"
            justify="space-around"
            direction={{ base: "column", lg: "row" }}
            p={4}
          >
            <Center width="55%">
              <Box p="10px" justifyContent="space-around" alignItems="center">
                <About />
                {!isLargeScreen ? (
                  <Center>
                    <button className="button-contact" onClick={onOpen}>
                      Contact Us
                    </button>
                  </Center>
                ) : null}
              </Box>
            </Center>

            <Center id="center-contact-wrapper" w="-moz-fit-content" pb="15px">
              {isLargeScreen ? (
                <Box id="contact-wrapper">
                  <Center h="100%">
                    <Contact handleContactSubmit={handleContactSubmit} />
                  </Center>
                </Box>
              ) : null}
            </Center>
          </Flex>
          <TechCarousel />
        </Flex>

        {isOpen && (
          <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            handleContactSubmit={handleContactSubmit}
            childComponent={showSuccessModal ? <SuccessModal /> : <Contact />}
          />
        )}
      </Box>
    </>
  );
};

export default HomePage;
