import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

const ActiveBookings = ({ bookings, acceptBooking, deleteBooking }) => {
  const formatDate = (date) => {
    var dateString = date;
    var dateObj = new Date(dateString);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format("ll");
    return momentString;
  };

  return (
    <Flex direction="column">
      {bookings && bookings.length > 0 ? (
        bookings.map((booking) => (
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
                    {booking.venue.venueName}
                  </Text>
                </Text>

                <Box my={2} />
                <Text>{booking.venue.venueDescription}</Text>
              </Box>

              <Flex direction="column" align="flex-end">
                <Box my={1} />
                <Text fontSize={16}>
                  Booking:
                  <Text ml={2} fontWeight="regular" as="span" color="brand.800">
                    {formatDate(booking.bookingDate)}
                  </Text>
                </Text>

                <Box my={1} />
                <Text fontSize={16}>
                  Requested By:
                  <Text ml={2} fontWeight="regular" as="span" color="brand.800">
                    {booking.bookingBy.firstName} {booking.bookingBy.lastName}
                  </Text>
                </Text>
              </Flex>
            </SimpleGrid>
            <Box my={2} />
            <Flex w="full" justify="flex-end">
              <Button
                bg="transparent"
                color="blackAlpha.700"
                onClick={() => deleteBooking(booking._id)}
              >
                Reject Booking
              </Button>
              <Box mx={2} />
              <Button
                bg="brand.600"
                color="white"
                _hover={{ bg: "brand.800" }}
                onClick={() => acceptBooking(booking)}
              >
                Accept Booking
              </Button>
            </Flex>
          </Flex>
        ))
      ) : (
        <Text fontSize="2xl">No More Pending Bookings</Text>
      )}
    </Flex>
  );
};

export default ActiveBookings;
