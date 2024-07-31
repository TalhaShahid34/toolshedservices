import React from 'react';
import './Contact.css';
import { Alert, AlertIcon,CloseButton, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const SuccessForm = ({onClose}) => {

    return (   
    <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='80%'
  borderRadius={5}
bg="transparent"
  
>
  
  {/* <AlertIcon boxSize='40px'  mr={0} /> */} 
  {onClose?<CloseButton
          alignSelf="flex-end"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />:null}
  <CheckIcon boxSize={14} color="#051c68" />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
   
  </AlertTitle>
  
  <AlertDescription maxWidth='auto' >
    <p className='text' color='black'>

    Thanks for contacting. Our team will get back to you soon.
    </p>
  </AlertDescription>
 
</Alert>

    );      
};

export default SuccessForm;