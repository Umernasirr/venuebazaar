import { Flex, Box, Text, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/all";
const Footer = () => {
  return (
    <Flex w="full" bg="blackAlpha.800" align="center" py={12}>
      <Box w="full" mx={32}>
        <Flex w="full" justify="space-between" color="white" textAlign="center">
          <Box>
            <Text fontWeight="semibold" fontSize={24}>
              BookNEvent
            </Text>
            <Box my={2} />
            <Text>© 2020 BookNEvent.inc</Text>
            <Box my={8} />

            <Flex w="full" justify="center">
              <AiOutlineFacebook size={24} />
              <Box mx={1} />
              <AiOutlineInstagram size={24} />
              <Box mx={1} />

              <AiOutlineTwitter size={24} />
            </Flex>
          </Box>
          <Box>
            <SimpleGrid columns={5} spacing={4} textAlign="left">
              <Text fontWeight="semibold">Wedding Spot</Text>
              <Text fontWeight="semibold">Services</Text>
              <Text fontWeight="semibold">Press Relaese</Text>
              <Text fontWeight="semibold">Terms</Text>
              <Text fontWeight="semibold">Help</Text>

              <Text>Home</Text>

              <Text>Find Venue</Text>
              <Text>In The News</Text>
              <Text>Terms of Services</Text>
              <Text>Contact Us</Text>

              <Text>Venues By Region</Text>
              <Text>Services</Text>
              <Text>News</Text>
              <Text>Privacy Policy</Text>
              <Text>FAQ</Text>

              <Text></Text>
              <Text></Text>
              <Text>Wedding Spot Blog</Text>
              <Text>Personal Information</Text>
              <Text></Text>
            </SimpleGrid>
          </Box>
          <Flex direction="column" align="flex-start">
            <Text fontWeight="semibold" fontSize={24}>
              Contact Us
            </Text>
            <Box my={2} />
            <Button
              color="white"
              _hover={{ outline: "none" }}
              leftIcon={<AiOutlineMail size={24} />}
              variant="link"
            >
              info@example.com
            </Button>

            <Box my={2} />
            <Button
              color="white"
              _hover={{ outline: "none" }}
              leftIcon={<AiOutlinePhone size={24} />}
              variant="link"
            >
              9439439493
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
