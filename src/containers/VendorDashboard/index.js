import React from "react";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import Footer from "../../components/Footer";
import ActiveBookings from "./ActiveBookings";
import { BOOKINGS } from "../../constants/index";
import ManageVenues from "./ManageVenues";
const VendorDashboard = () => {
  const history = useHistory();
  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ base: 4, md: 16 }}>
        <Flex justify="space-between" w="full" align="center">
          <Text
            textAlign={["center", "left", "left", "left"]}
            fontSize={26}
            fontWeight="semibold"
          >
            Welcome Talal.
          </Text>

          <Box mx={1} />
          <Button
            bg="brand.600"
            color="white"
            borderRadius={8}
            w="120px"
            h="56px"
            _focus={{ outline: "none" }}
            _hover={{ bg: "brand.800" }}
            onClick={() => {
              history.push("/vendorAddVenue");
            }}
          >
            Add Venue
          </Button>
        </Flex>
        <Box my={4} borderColor="brand.600" borderWidth={1} />
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <ActiveBookings bookings={BOOKINGS} />
          <ManageVenues />
        </SimpleGrid>
      </Box>
      <Box my={4} />
      <Footer />
    </Flex>
  );
};

export default VendorDashboard;
