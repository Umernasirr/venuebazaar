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
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineKey,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/all";
import React, { useState } from "react";
import { service } from "../services/services";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../services/store";
import { setUser as setUserr } from "../redux/user";

const LoginModal = ({ isLoginOpen, setIsLoginOpen }) => {
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const { email, password } = user;

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
      service
        .login({ email, password })
        .then(({ data }) => {
          if (data.success) {
            Store.setUserToken(data.token);
            Store.setUser(data.user);
            dispatch(setUserr(data.user));
            setIsLoginOpen(false);
            setUser({
              email: "",
              password: "",
            });
            setError("");
          } else {
            setError(data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Modal
      isOpen={isLoginOpen}
      onClose={() => {
        setError("");
        setUser({
          email: "",
          password: "",
        });
        setIsLoginOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent mx={{ base: 2 }}>
        <ModalHeader>Login Now!</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={{ md: 8 }}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <FormHelperText color="red">{errEmail}</FormHelperText>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup w="full">
              <Input
                type="text"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <InputRightElement px={2}>
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <FormHelperText color="red">{errPassword}</FormHelperText>
          </FormControl>
          {error !== "" && <Text color="red.700">*{error}</Text>}
        </ModalBody>

        <ModalFooter>
          <Button mr={3} px={8} onClick={() => setIsLoginOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="ghost"
            bg="brand.600"
            _hover={{ backgroundColor: "brand.800" }}
            color="white"
            px={8}
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
