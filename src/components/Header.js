import { Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlinePhone,
  IoLocationOutline,
} from "react-icons/all";
import LoginModal from "./LoginModal";
import JoinModal from "./JoinModal";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../services/store";
import { clearUser } from "../redux/user";

const Header = ({ isJoinOpen, setIsJoinOpen, role }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLogin = () => {
    setIsLoginOpen(true);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    Store.logoutAndReset();
  };

  const dispatch = useDispatch();
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
          leftIcon={!currentUser ? <AiOutlineLogin /> : <AiOutlineLogout />}
          onClick={() => (!currentUser ? handleLogin() : handleLogout())}
        >
          {!currentUser ? "Login" : "Logout"}
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

      <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <JoinModal
        isJoinOpen={isJoinOpen}
        setIsJoinOpen={setIsJoinOpen}
        role={role}
      />
    </Flex>
  );
};

export default Header;
