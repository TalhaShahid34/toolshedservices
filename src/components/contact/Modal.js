import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import React, { useState } from 'react';
import Contact from './Contact';
import SuccessModal from './SuccessModal';

  function CustomModal({isOpen,onClose,childComponent,handleContactSubmit,msg,status}) {
   
 
    return (
      <>
        
  
        <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay 
           bg="rgba(5, 28, 104, 0.8)" // #051C68 with transparency
           backdropFilter="blur(0.9px) hue-rotate(90deg)"/>
          <ModalContent bg="#F7B890">
            <ModalCloseButton/>
          {React.cloneElement(childComponent, { handleContactSubmit,onClose,msg,status})}
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CustomModal;