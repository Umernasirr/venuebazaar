import { Flex, Button, Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/all";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SubHeader = ({ setIsJoinOpen, setRole }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg="brand.600"
    >
      <Box
        display={{ base: "block", md: "none" }}
        pl={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <AiOutlineMenuUnfold size={24} color="white" />
        ) : (
          <AiOutlineMenuFold size={24} color="white" />
        )}
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "center", "flex-start", "flex-start"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          mx={4}
        >
          {currentUser?.role !== "vendor" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
              onClick={() => history.push("/")}
            >
              Venue
            </Button>
          )}

          {currentUser?.role !== "vendor" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
            >
              Ideas
            </Button>
          )}

          {currentUser?.role !== "vendor" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
            >
              Deals
            </Button>
          )}

          {currentUser?.role !== "vendor" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
            >
              Corporate
            </Button>
          )}
          {currentUser && currentUser?.role === "vendor" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
              onClick={() => {
                history.push("/vendorDashboard");
              }}
            >
              My Dashboard
            </Button>
          )}

          {currentUser && currentUser?.role === "admin" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
              onClick={() => {
                history.push("/adminDashboard");
              }}
            >
              My Dashboard
            </Button>
          )}

          {currentUser && currentUser?.role !== "user" && (
            <Button
              _hover={{ outline: "none", color: "brand.100" }}
              variant="link"
              color="white"
              mx={2}
              fontSize={18}
              fontWeight="normal"
              onClick={() => {
                history.push("/vendorAddVenue");
              }}
            >
              Add Venue
            </Button>
          )}
        </Stack>
      </Box>

      {!currentUser && !isOpen && (
        <Flex px={4}>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={2}
            fontSize={{ base: 16, md: 18 }}
            fontWeight="normal"
            onClick={() => {
              setIsJoinOpen(true);
              setRole("Vendor");
            }}
          >
            Join as a Vendor
          </Button>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={2}
            fontSize={{ base: 16, md: 18 }}
            fontWeight="normal"
            onClick={() => {
              setIsJoinOpen(true);
              setRole("User");
            }}
          >
            Join as a User
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default SubHeader;
