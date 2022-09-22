import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";

const Header = () => {
  return (
    <>
      <Box bg="#6B46C1" w="100%" h="397px" pt="90px" pb="198px">
        <Heading
          color="white"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign={["center"]}
        >
          Simple pricing for your business
        </Heading>
        <Text color="white" textAlign={["center"]} fontSize={["lg", "lg", "xl"]} paddingLeft={["10%","","0%"]} pt="20px"> 
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
      <Card />
    </>
  );
};

export default Header;
