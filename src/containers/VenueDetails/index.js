import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import ItemDetails from "./ItemDetails";
import MyCalendar from "../../components/MyCalendar";
const VenueDetails = ({ match }) => {
  const { id } = match.params;

  const selectedItem = {
    id: 1,
    name: "Medallion Banquet",
    address: "Block 10, Gulshan-e-Iqbal, Rashid Minhas Road.",
    price: "454 - 565",
    description: "What a Garden...",
    seating: 500,
    type: "Banquet",
    features: ["Projector", "Waitress", "Special Light", "Air – Condition"],
    bookings: [],
  };

  return (
    <Flex w="full" h="full" direction="column">
      <SectionCarousel />
      <Box my={4} />

      <Box mx={{ base: 4, md: 16 }}>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <ItemDetails selectedItem={selectedItem} />

          <Flex align="center" justify="center" p={4}>
            <MyCalendar venue={selectedItem} />
          </Flex>
        </SimpleGrid>
      </Box>

      <Box my={4} />

      <Footer />
    </Flex>
  );
};

export default VenueDetails;
