import React, {useState } from "react";
import { Box, FormControl, Center,useDisclosure, Spinner } from "@chakra-ui/react";
import CustomModal from "./Modal";
import SuccessModal from "./SuccessModal";
import "./Contact.css";
import { LineWave } from "react-loader-spinner";

const Contact = ({ handleContactSubmit ,loading}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [isNotValid, setIsNotValid] = useState(false);
  const validateAndSubmit=(event)=>{
    event.preventDefault();
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let name = document.getElementById("name");
    if(!email ||!email.value || !message ||!message.value){
      // setIsNotValid(true);
      onOpen();
      return;
    }
    handleContactSubmit({ email: email.value, message: message.value,name:name.value });
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
          <FormControl  mb={4} isRequired>
            <input
            id="name"
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
            { loading ?
          <Spinner color="green.500" size="lg" thickness="2.5px" />
              // <LineWave color={'#051C68'} loading={loading} borderRadius={2} size={5} />
              :

            
          "Submit"
}
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
