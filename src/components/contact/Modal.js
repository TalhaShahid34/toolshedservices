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

  function CustomModal({isOpen,onClose,childComponent,modalCloaseButtonStatus,handleContactSubmit,msg,status,loading}) {
   const tryClose = ()=>{
    //  if(!loading){
      console.log(loading);
       onClose();
    //  }  
    };
    return (
      <>
        
  
        <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay 
           bg="rgba(5, 28, 104, 0.8)" // #051C68 with transparency
           backdropFilter="blur(0.9px) hue-rotate(90deg)"/>
          <ModalContent bg="#F7B896">
            {modalCloaseButtonStatus? <ModalCloseButton  onClick={onClose}/>:null}
          {React.cloneElement(childComponent, { handleContactSubmit,onClose,msg,status,loading})}
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CustomModal;