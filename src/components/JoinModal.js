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

const JoinModal = ({ isJoinOpen, setIsJoinOpen, role }) => {
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
  });

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
  const handleRegister = () => {
    if (handleValidation()) {
      console.log("LOGIN HANDLE AXIOS");
    }
  };

  return (
    <Modal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)}>
      <ModalOverlay />
      <ModalContent mx={{ base: 2 }}>
        <ModalHeader>Register Now As a {role}!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="firstName">
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="text"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <FormHelperText color="red">{""}</FormHelperText>
          </FormControl>

          <FormControl id="lastName">
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="text"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
            <FormHelperText color="red">{""}</FormHelperText>
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <FormHelperText color="red">{errEmail}</FormHelperText>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <FormHelperText color="red">{errPassword}</FormHelperText>
          </FormControl>

          <FormControl id="confirmpassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="text"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <FormHelperText color="red">{errPassword}</FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} px={8} onClick={() => setIsJoinOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="ghost"
            bg="brand.600"
            _hover={{ backgroundColor: "brand.800" }}
            color="white"
            px={8}
            onClick={handleRegister}
          >
            Register
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JoinModal;
