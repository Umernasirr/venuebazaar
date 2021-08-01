import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineLogin,
  AiOutlineNotification,
  AiOutlinePhone,
  GrLocationPin,
  IoLocationOutline,
  MdLocationCity,
} from "react-icons/all";

const Header = () => {
  return (
    <Flex w="full" h="80px" bg="gray.100" justify="space-between">
      <Flex align="center" px={4}>
        <Button
          _hover={{ outline: "none", color: "brand.600" }}
          variant="link"
          color="black"
          mx={4}
          fontSize={30}
          fontWeight="bold"
          fontStyle="italic"
        >
          BookNEvent
        </Button>
      </Flex>

      <Flex align="center" px={4} direction="row-reverse">
        <Button
          _hover={{ outline: "none", color: "brand.600" }}
          variant="link"
          color="black"
          mx={4}
          p={0}
          fontSize={18}
          leftIcon={<AiOutlineLogin />}
        >
          Login
        </Button>

        <Button
          _hover={{ outline: "none", color: "brand.600" }}
          variant="link"
          color="black"
          mx={4}
          p={0}
          fontSize={18}
          leftIcon={<AiOutlinePhone />}
        >
          0939349344
        </Button>

        <Button
          _hover={{ outline: "none", color: "brand.600" }}
          variant="link"
          color="black"
          mx={4}
          p={0}
          fontSize={18}
          leftIcon={<IoLocationOutline />}
        >
          Location
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
