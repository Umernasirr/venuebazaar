import { Flex, Button, Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/all";

const SubHeader = ({ setIsJoinOpen, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={2}
            fontSize={18}
            fontWeight="normal"
          >
            Venue
          </Button>
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
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={2}
            fontSize={18}
            fontWeight="normal"
          >
            Bazaar
          </Button>
        </Stack>
      </Box>

      {!isOpen && (
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
