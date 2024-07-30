import {
  Box,
  Center,
  Flex,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState,useRef } from "react";
import "./Home.css";
import "react-fancy-circular-carousel/FancyCarousel.css";
import emailjs from 'emailjs-com';
//components
import Contact from "../components/contact/Contact";
import SuccessModal from "../components/contact/SuccessModal";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import TechCarousel from "../components/technologiesCarousel/TechCarousel";
import CustomModal from "../components/contact/Modal";
import SuccessForm from "../components/contact/SuccessForm";

const HomePage = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleContactSubmit = (data) => {
    if (showSuccessModal) {
      return;
    }

    onClose();
    console.log("Contact form submitted");
    console.log(data.email);
    console.log(data.name);
    console.log(data.message);
    
    // Prepare email parameters
    const emailParams = {
      user_name:data.name,
      user_email:data.email,
      message:  data.message ,
    };
    console.log(emailParams);

    // Send the email using EmailJS
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from your EmailJS account
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from your EmailJS account
      { ...emailParams },
      process.env.REACT_APP_EMAILJS_USER_ID // User ID from your EmailJS account
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setShowSuccessModal(true);
      if (!isLargeScreen) {
        onOpen();
      }
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
    });
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
            h="64vh"
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
                    {showSuccessModal ? (
                      <SuccessForm  />
                    ) : (
                      <Contact handleContactSubmit={handleContactSubmit} />
                    )}
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
            msg="Thanks for contacting us! We will get back to you soon."
            status="success"
            childComponent={showSuccessModal ? <SuccessModal /> : <Contact />}
          />
        )}
      </Box>
    </>
  );
};

export default HomePage;
