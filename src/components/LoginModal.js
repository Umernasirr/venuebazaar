import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LoginModal = ({ isLoginOpen, setIsLoginOpen }) => {
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (value) => {
    setUser({ ...user, email: value });
  };

  const handleChangePassword = (value) => {
    setUser({ ...user, password: value });
  };

  const handleValidation = () => {
    let isValid = true;

    if (user.password === "") {
      setErrPassword("Please Enter Valid Password");
      isValid = false;
    } else {
      setErrPassword("");
    }
    if (user.email === "") {
      setErrEmail("Please Enter Valid Email");
      isValid = false;
    } else {
      setErrEmail("");
    }

    return isValid;
  };
  const handleLogin = () => {
    if (handleValidation()) {
      console.log("LOGIN HANDLE AXIOS");
    }
  };

  return (
    <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
      <ModalOverlay />
      <ModalContent mx={{ base: 2 }}>
        <ModalHeader>Login Now!</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={{ md: 8 }}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => handleChangeEmail(e.target.value)}
            />
            <FormHelperText color="red">{errEmail}</FormHelperText>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              type={showPassword ? "text" : "password"}
              onChange={(e) => handleChangePassword(e.target.value)}
            />
            <FormHelperText color="red">{errPassword}</FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => setIsLoginOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            bg="brand.600"
            color="white"
            onClick={handleLogin}
          >
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
