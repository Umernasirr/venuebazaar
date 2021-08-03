import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import ActiveBookings from "./ActiveBookings";

import { BOOKINGS } from "../../constants/index";
import ManageVenues from "./ManageVenues";
const VendorDashboard = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ base: 4, md: 16 }}>
        <Text
          textAlign={["center", "left", "left", "left"]}
          fontSize={[32, 26, 26, 26]}
          fontWeight="semibold"
        >
          Welcome Talal Abbas!
        </Text>

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
