import {
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import CheckIcon from "../icons/Icon";

const Feature = () => {
  return (
    <div>
      <Stack
        justify=""
        p={["", "", "20px"]}
        maxW="994px"
        margin="auto"
        breakpoints="sm"
        direction={["column", "", "row"]}
      >
        <Box>
          <Flex pl="20px">
            <Icon as={CheckIcon} />
            <Text
              color="#171923"
              fontSize={["12px", "16px", "18px"]}
              fontWeight="500px"
              mt="8px"
              pl="20px"
            >
              30 days money back guarantee
            </Text>
          </Flex>
        </Box>

        <Box>
          <Flex pl="20px">
            <Icon as={CheckIcon}/>
            <Text
              color="#171923"
              fontSize={["12px", "16px", "18px"]}
              fontWeight="500px"
              mt="8px"
              pl="20px"
            >
              No setup fee. 100% hassle-free
            </Text>
          </Flex>
        </Box>
        
        <Box>
          <Flex pl="20px">
            <Icon as={CheckIcon} size="500px"/>
            <Text
              color="#171923"
              fontSize={["12px", "16px", "18px"]}
              fontWeight="500px"
              mt="8px"
              pl="20px"
            >
              No monthly subscription. Pay once and for all
            </Text>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
};

export default Feature;
