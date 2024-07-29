import React, {useState } from "react";
import { Box, FormControl, Center,useDisclosure,  } from "@chakra-ui/react";
import CustomModal from "./Modal";
import SuccessModal from "./SuccessModal";
import "./Contact.css";
const Contact = ({ handleContactSubmit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [isNotValid, setIsNotValid] = useState(false);
  const validateAndSubmit=(event)=>{
    event.preventDefault();
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    console.log(email.value);
    if(!email ||!email.value || !message ||!message.value){
      // setIsNotValid(true);
      onOpen();
      return;
    }
    handleContactSubmit({ email: email.value, message: message.value });
  }
  return (
    <>
      <Box id="contact" w="auto" mx="auto" borderRadius="lg" p={3}>
        <form onSubmit={validateAndSubmit}>
        <Center>
          <h1 className="contact-heading" mb={4}>
            Contact Us
          </h1>
        </Center>
           <Center>
          <FormControl id="name" mb={4} isRequired>
            <input
              className="contact-input"
              type="text"
              placeholder="Enter your name"
            />
          </FormControl>
           </Center>
           <Center>
          <FormControl  mb={4} isRequired>
            <input
              className="contact-input"
              type="email" id='email'
              placeholder="Enter your email" required
            />
          </FormControl>
           </Center>
           <Center>
          <FormControl  mb={4} isRequired>
            <textarea
              className="contact-text-input"
              id="message"
              placeholder="Enter your message"
            />
          </FormControl>
           </Center>

           <Center>
          <button className="button-submit" type="submit" >
            Submit
          </button>
          </Center>
        </form>
      </Box>
      {
          <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            handleContactSubmit={handleContactSubmit}
            msg="Please Fill out required fields!"
            status='error'
            childComponent={<SuccessModal />}
          />
        }
    </>
  );
};

export default Contact;
