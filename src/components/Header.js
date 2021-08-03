import { Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineLogin,
  AiOutlinePhone,
  IoLocationOutline,
} from "react-icons/all";
import LoginModal from "./LoginModal";
import JoinModal from "./JoinModal";

const Header = ({ isJoinOpen, setIsJoinOpen, role }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  console.log(role);
  const registerHandler = (user) => {
    console.log(user);
  };

  return (
    <Flex w="full" bg="gray.100" justify="space-between">
      <Flex align="center" p={4}>
        <Button
          _hover={{ outline: "none", color: "brand.600" }}
          variant="link"
          color="black"
          mx={4}
          fontSize={{ base: 18, md: 24 }}
          fontWeight="bold"
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
          fontSize={16}
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
          fontSize={16}
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
          fontSize={16}
          leftIcon={<IoLocationOutline />}
        >
          Location
        </Button>
      </Flex>

      {/* Login Modal */}

      <LoginModal
        registerHandler={registerHandler}
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
      <JoinModal
        registerHandler={registerHandler}
        isJoinOpen={isJoinOpen}
        setIsJoinOpen={setIsJoinOpen}
        role={role}
      />
    </Flex>
  );
};

export default Header;
