import { Flex, Text, Button, Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/all";

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
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
        >
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={4}
            fontSize={20}
            fontWeight="semibold"
          >
            Venue
          </Button>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={4}
            fontSize={20}
            fontWeight="semibold"
          >
            Ideas
          </Button>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={4}
            fontSize={20}
            fontWeight="semibold"
          >
            Deals
          </Button>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={4}
            fontSize={20}
            fontWeight="semibold"
          >
            Corporate
          </Button>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={4}
            fontSize={20}
            fontWeight="semibold"
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
            fontSize={{ base: 16, md: 20 }}
            fontWeight="normal"
          >
            Join as a Vendor
          </Button>
          <Button
            _hover={{ outline: "none", color: "brand.100" }}
            variant="link"
            color="white"
            mx={2}
            fontSize={{ base: 16, md: 20 }}
            fontWeight="normal"
          >
            Join as a User
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default SubHeader;
