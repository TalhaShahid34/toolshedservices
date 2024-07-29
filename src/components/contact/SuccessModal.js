import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from '@chakra-ui/react';

function SuccessModal({onClose}) {

  return (
    <>
    <Alert status='success'  zIndex="12">
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Thanks for contacting us! We will get back to you soon.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
        
      />
    </Alert>
    </>

  );
}

export default SuccessModal;
