import { Box, Button, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { Container } from "@chakra-ui/react";

const Card = () => {
  return (
    <>
      <Flex m="20px">
        <Box
          maxW={["400px", "600px", "994px"]}
          maxH={[null, null, "400px"]}
          margin="auto"
          mt="-120px"
          borderRadius="12px"
          overflow="hidden"
          boxShadow="10px 14px 10px rgba(0, 0, 0, 0.2)"
        >
          <Flex direction={["column", "column", "row"]}>
            <Box bg="#F0EAFB" p="60px" textAlign="center">
              <Text fontWeight="800" fontSize="26px" color="#171923">
                Premium PRO
              </Text>
              <Heading as="h3" fontSize={["40px", "50px", "60px"]} mt="16px">
                $329
              </Heading>
              <Text color="#171923" fontSize="18px" fontWeight="500px" mt="8px">
                Billed just once
              </Text>
              <Button
                colorScheme="purple"
                borderRadius="8px"
                h="51px"
                mt="24px"
                w={["200px", "220px", "282px"]}
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}
              >
                Get Started
              </Button>
            </Box>

            <Flex>
              <Box p="60px" fontSize={["", "", "16px"]} bg="white">
                <Stack>
                  <Text>
                    Access these features when you get this pricing package for
                    your business
                  </Text>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="purple.500" />
                      International calling and messaging API
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="purple.500" />
                      Additional phone numbers
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="purple.500" />
                      Automated messages via Zapper
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="purple.500" />
                      24/7 support and consulting
                    </ListItem>
                  </List>
                </Stack>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Card;
