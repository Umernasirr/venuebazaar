import { Flex, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineLogin,
  AiOutlineNotification,
  AiOutlinePhone,
  GrLocationPin,
  IoLocationOutline,
  MdLocationCity,
} from "react-icons/all";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Flex w="full" h="80px" bg="gray.100" justify="space-between">
      <Flex align="center" px={4}>
        <Button
          _hover={{ outline: "none", color: "brand.600" }}
          variant="link"
          color="black"
          mx={4}
          fontSize={{ base: 30, md: 42 }}
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
          onClick={() => setIsLoginOpen(!isLoginOpen)}
        >
          Login
        </Button>

        <Button
          display={{ base: "none", md: "inline-block" }}
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
          display={{ base: "none", md: "inline-block" }}
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

      {/* Login Modal */}

      <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
    </Flex>
  );
};

export default Header;
