import { Center, Heading,VStack,Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center pt={10} >
      <Box padding={6} w="100%"  bg="black" color="white" style={{ pageBreakInside: 'avoid' }}>

      <VStack>

      <Text>
      Copyright © 2024 toolshedservices.com - All Rights Reserved.
      </Text>
    </VStack>
    </Box>

    </Center>
  );
};

export default Footer;
