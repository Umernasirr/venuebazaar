import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ItemDetails from "./ItemDetails";

const VenueDetails = ({ match }) => {
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {}, []);
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

      <Box mx={16} w="full">
        <SimpleGrid columns={2}>
          <ItemDetails selectedItem={selectedItem} />

          <Flex>
            <Calendar
              onChange={(value) => {
                setSelectedDate(value);
              }}
              value={selectedDate}
            />
          </Flex>
        </SimpleGrid>
      </Box>

      <Box my={4} />
      <Footer />
    </Flex>
  );
};

export default VenueDetails;
