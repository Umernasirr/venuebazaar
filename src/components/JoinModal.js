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
  NumberInput,
  NumberInputField,
  InputRightElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/all";
import React, { useState } from "react";
import { service } from "../services/services";

const JoinModal = ({ isJoinOpen, setIsJoinOpen, role }) => {
  const format = (val) => `92` + val;
  const parse = (val) => val.replace(/^\92/, "");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
    confirmPassword: "",
  });
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const { firstName, lastName, email, password, phoneNo, confirmPassword } =
    user;
  const isFormEmpty = () => {
    return (
      !firstName.length ||
      !lastName.length ||
      !phoneNo.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length
    );
  };
  const isPasswordValid = () => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };
  const isPhoneNoValid = () => {
    // if(phoneNo.split)
    if (phoneNo.toString().split("")[0] !== "3") {
      return false;
    } else if (phoneNo.length !== 10) {
      return false;
    } else {
      return true;
    }
  };
  const handleRegister = () => {
    if (isFormEmpty()) {
      setError("Please fill all reqired fields");
    } else if (!isPasswordValid()) {
      setError("Please check confirm password and password with length 6");
    } else if (!isPhoneNoValid()) {
      setError("Please enter phone number in this format 3059674177");
    } else {
      const newUser = {
        ...user,
        role: role.toString().toLowerCase(),
        phoneNo: "+92" + phoneNo,
      };
      setLoading(true);
      service
        .register(newUser)
        .then(({ data }) => {
          setLoading(false);
          if (data.success) {
            setError("");
            setMessage(
              "Account Created! Please click on link sent to your email to verify"
            );

            setUser({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phoneNo: "",
              confirmPassword: "",
            });
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
      isOpen={isJoinOpen}
      onClose={() => {
        setError("");
        setMessage("");
        setIsJoinOpen(false);
      }}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <ModalOverlay />
      <ModalContent mx={{ base: 2 }}>
        <ModalHeader>Register Now As a {role}!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              ref={initialRef}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <FormHelperText color="red">{""}</FormHelperText>
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
            <FormHelperText color="red">{""}</FormHelperText>
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Contact Number (923059674188)</FormLabel>
            <NumberInput
              value={format(phoneNo)}
              onChange={(e) => setUser({ ...user, phoneNo: parse(e) })}
            >
              <NumberInputField />
            </NumberInput>
            {/* <Input
              type="numeric"
              value={phoneNo}
              onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
            /> */}
            <FormHelperText color="red">{""}</FormHelperText>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <FormHelperText color="red">{errEmail}</FormHelperText>
          </FormControl>
          <FormControl id="password" isRequired>
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
          <FormControl id="confirmpassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                value={confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
              <InputRightElement px={2}>
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <FormHelperText color="red">{errPassword}</FormHelperText>
          </FormControl>
          {error !== "" && <Text color="red.700">*{error}</Text>}
          {message !== "" && <Text color="green.500">{message}</Text>}
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            px={8}
            onClick={() => {
              setError("");
              setMessage("");
              setIsJoinOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            bg="brand.600"
            loading={loading}
            _hover={{ backgroundColor: "brand.800" }}
            color="white"
            px={8}
            onClick={handleRegister}
            ref={finalRef}
          >
            Register
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default JoinModal;
