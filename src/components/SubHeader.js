import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

const SubHeader = () => {
  return (
    <Flex w="full" h="60px" bg="brand.600" justify="space-between">
      <Flex align="center" px={4}>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={4}
          fontSize={20}
          fontWeight="semibold"
        >
          Venue
        </Button>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={4}
          fontSize={20}
          fontWeight="semibold"
        >
          Ideas
        </Button>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={4}
          fontSize={20}
          fontWeight="semibold"
        >
          Deals
        </Button>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={4}
          fontSize={20}
          fontWeight="semibold"
        >
          Corporate
        </Button>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={4}
          fontSize={20}
          fontWeight="semibold"
        >
          Bazaar
        </Button>
      </Flex>

      <Flex px={4}>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={2}
          fontSize={20}
          fontWeight="normal"
        >
          Join as a Vendor
        </Button>
        <Button
          _hover={{ outline: "none", color: "brand.100" }}
          variant="link"
          color="white"
          mx={2}
          fontSize={20}
          fontWeight="normal"
        >
          Join as a User
        </Button>
      </Flex>
    </Flex>
  );
};

export default SubHeader;
