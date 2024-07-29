import React, { forwardRef, useState } from "react";
import { Box, FormControl, Center } from "@chakra-ui/react";
import "./Contact.css";
const Contact = ({ handleContactSubmit }) => {
  return (
    <>
      <Box id="contact" w="auto" mx="auto" borderRadius="lg" p={3}>
        <Center>
          <h1 className="contact-heading" mb={4}>
            Contact Us
          </h1>
        </Center>
        <Center>
          <FormControl id="name" mb={4}>
            <input
              className="contact-input"
              type="text"
              placeholder="Enter your name"
            />
          </FormControl>
        </Center>
        <Center>
          <FormControl id="email" mb={4}>
            <input
              className="contact-input"
              type="email"
              placeholder="Enter your email"
            />
          </FormControl>
        </Center>
        <Center>
          <FormControl id="message" mb={4}>
            <textarea
              className="contact-text-input"
              placeholder="Enter your message"
            />
          </FormControl>
        </Center>

        <Center>
          <button className="button-submit" onClick={handleContactSubmit}>
            Submit
          </button>
        </Center>
      </Box>
    </>
  );
};

export default Contact;
