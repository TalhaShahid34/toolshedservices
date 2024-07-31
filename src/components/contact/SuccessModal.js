import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";

function SuccessModal({ onClose, msg,status }) {
  return (
    <>
      <Alert status={status} zIndex="12">
        <AlertIcon />
        <Box>
          {/* <AlertTitle>Success!</AlertTitle> */}
          <AlertDescription>{msg} </AlertDescription>
        </Box>
        
      </Alert>
    </>
  );
}

export default SuccessModal;
