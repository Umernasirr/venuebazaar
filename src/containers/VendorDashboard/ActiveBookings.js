import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const ActiveBookings = ({ bookings }) => {
  return (
    <Flex direction="column">
      {bookings.map((booking) => (
        <Flex
          direction="column"
          p={4}
          my={1}
          borderRadius={8}
          boxShadow={["md", "sm", "sm", "sm"]}
          w="full"
          align="space-between"
        >
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Box>
              <Text fontSize={{ base: 20, md: 24 }}>
                Venue:
                <Text ml={2} fontWeight="regular" as="span" color="brand.800">
                  {booking.name}
                </Text>
              </Text>

              <Box my={2} />
              <Text>{booking.description}</Text>
            </Box>

            <Flex direction="column" align="flex-end">
              <Box my={1} />
              <Text fontSize={16}>
                Booking:
                <Text ml={2} fontWeight="regular" as="span" color="brand.800">
                  {booking.date}
                </Text>
              </Text>

              <Box my={1} />
              <Text fontSize={16}>
                Requested By:
                <Text ml={2} fontWeight="regular" as="span" color="brand.800">
                  {booking.userName}
                </Text>
              </Text>
            </Flex>
          </SimpleGrid>
          <Box my={2} />
          <Flex w="full" justify="flex-end">
            <Button bg="transparent" color="blackAlpha.700">
              Reject Booking
            </Button>
            <Box mx={2} />
            <Button bg="brand.600" color="white">
              Accept Booking
            </Button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default ActiveBookings;
