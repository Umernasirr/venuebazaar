import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

import { VENUES } from "../../constants/index";
const ManageVenues = () => {
  return (
    <Flex direction="column" mx={4} my={{ base: 4, md: 2 }}>
      <Text fontSize={24} fontWeight="bold" textAlign="center">
        Manage Venues
      </Text>
      <Flex
        direction="column"
        p={4}
        my={1}
        borderRadius={16}
        w="full"
        align="space-between"
      >
        {VENUES.map((venue) => (
          <Flex p={4} w="full">
            <Flex
              w="full"
              boxShadow={["md", "md", "sm", "sm"]}
              p={2}
              py={{ base: 0, md: 2 }}
              justify="space-between"
              align="flex-end"
            >
              <Flex
                w="full"
                align="center"
                direction={["column", "column", "row", "row"]}
              >
                <Image
                  height="120px"
                  width="260px"
                  objectFit="cover"
                  borderRadius={10}
                  src={"https://picsum.photos/600/600"}
                />
                <Box mx={2} />
                <SimpleGrid
                  w="full"
                  justifyContent="space-between"
                  columns={[1, 1, 2, 2]}
                >
                  <Flex direction="column" my={{ base: 4, md: 0 }}>
                    <Text
                      textAlign={["center", "left", "left", "left"]}
                      fontSize={22}
                      fontWeight="semibold"
                    >
                      {venue.name}
                    </Text>
                    <Box my={{ base: 1, md: 0 }} />
                    <Text>{venue.description}</Text>
                    <Box my={1} />
                    <Text>Price: {venue.price} PKR</Text>

                    <Box my={1} />
                    <Text>Seating: {venue.seating} People </Text>
                  </Flex>

                  <Flex
                    justify={[
                      "space-around",
                      "space-around",
                      "flex-end",
                      "flex-end",
                    ]}
                    my={{ base: 4, md: 0 }}
                  >
                    <Button
                      bg="brand.600"
                      color="white"
                      width={["120px", "120px", "60px", "60px"]}
                      _hover={{ bg: "brand.800" }}
                    >
                      Edit
                    </Button>
                    <Box mx={1} />
                    <Button width={["120px", "120px", "60px", "60px"]}>
                      Delete
                    </Button>
                  </Flex>
                </SimpleGrid>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ManageVenues;
