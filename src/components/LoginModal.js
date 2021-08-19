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
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/all";
import React, { useState } from "react";
import { service } from "../services/services";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../services/store";
import { setUser as setUserr } from "../redux/user";

const LoginModal = ({ isLoginOpen, setIsLoginOpen }) => {
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

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
      setLoading(true);
      service
        .login({ email, password })
        .then(({ data }) => {
          setLoading(false);
          if (data.success) {
            Store.setUserToken(data.token);
            Store.setUser(JSON.stringify(data.user));

            const user = data.user;
            dispatch(setUserr(data.user));
            setError("");
            setIsLoginOpen(false);
            setUser({
              email: "",
              password: "",
            });
            if (user.role === "vendor") {
              history.push("/vendorDashboard");
            } else if (user.role === "admin") {
              history.push("/adminDashboard");
            } else {
              history.push("/");
            }
            setError("");
          } else {
            setError(data.error);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <Modal
      isOpen={isLoginOpen}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
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
              ref={initialRef}
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <FormHelperText color="red">{errEmail}</FormHelperText>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup w="full">
              <Input
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
          <Button
            mr={3}
            px={8}
            onClick={() => {
              setError("");
              setUser({
                email: "",
                password: "",
              });
              setIsLoginOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            bg="brand.600"
            isLoading={loading}
            _hover={{ backgroundColor: "brand.800" }}
            color="white"
            px={8}
            onClick={handleLogin}
            ref={finalRef}
          >
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
