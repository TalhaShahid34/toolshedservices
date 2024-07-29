import React from 'react';
import './Contact.css';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
const SuccessForm = () => {

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
  textColor='black'

  
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    <h1 className='contact-heading'> Application submitted!</h1>
   
  </AlertTitle>
  <AlertDescription maxWidth='auto' >
    <p className='text' color='black'>

    Thanks for submitting your application. Our team will get back to you soon.
    </p>
  </AlertDescription>
</Alert>

    );      
};

export default SuccessForm;