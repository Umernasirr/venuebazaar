import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import { useHistory } from "react-router-dom";
const ManageVenues = ({ venues, handleDeleteVenue }) => {
  const history = useHistory();
  return (
    <Flex direction="column" mx={0} my={{ base: 4, md: 2 }}>
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
        {venues.map((venue) => (
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
                  src={venue.images[0]}
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
                      {venue.venueName}
                    </Text>
                    <Box my={{ base: 1, md: 0 }} />
                    <Text>{venue.venueDescription}</Text>
                    <Box my={1} />
                    <Text>Price: {venue.venueMaxPrice} PKR</Text>

                    <Box my={1} />
                    <Text>Seating: {venue.venueCapacity} People </Text>
                  </Flex>

                  <Flex
                    direction={[
                      "column-reverse",
                      "column-reverse",
                      "column",
                      "column",
                    ]}
                    align={["center", "center", "flex-end", "flex-end"]}
                    justify="space-between"
                    my={{ base: 4, md: 0 }}
                  >
                    <Flex>
                      <Button
                        bg="brand.600"
                        color="white"
                        width={["120px", "120px", "60px", "60px"]}
                        _hover={{ bg: "brand.800" }}
                        onClick={() =>
                          history.push(`/vendorEditVenue/${venue._id}`, {
                            venue: venue,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Box mx={1} />
                      <Button
                        bg={["gray.100", "transparent"]}
                        width={["120px", "120px", "60px", "60px"]}
                        onClick={() => handleDeleteVenue(venue._id)}
                      >
                        Delete
                      </Button>
                    </Flex>

                    <Flex my={{ base: 2, md: 0 }}>
                      <Button
                        bg="white"
                        color="blackAlpha.700"
                        borderColor="brand.600"
                        borderWidth={2}
                        width={["120px", "120px", "80px", "130px"]}
                        height="50px"
                        _hover={{
                          bg: "gray.50",
                          color: "black",
                        }}
                        onClick={() =>
                          history.push(`/venueDetails/${venue._id}`)
                        }
                      >
                        Add Booking
                      </Button>
                    </Flex>
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
