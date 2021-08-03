import React, { useState, useEffect } from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import { VENUES } from "../../constants";
import SearchItem from "./SearchItem";

const ACTIVE_BOOKINS = [1, 1, 1, 1, 1];

const Search = (match, location) => {
  const { search } = useLocation();
  const [venues, setVenues] = useState(VENUES);
  const [filteredVenues, setFilteredVenues] = useState([]);
  useEffect(() => {
    const searchTxt = search.replace("?q=", "");

    const queryStrings = searchTxt.split("&"); //feck u
    const venue = queryStrings[0];
    const venueArea = queryStrings[1];
    const venueType = queryStrings[2];

    let filteredVenues = venues.filter(
      (v) => v.type === venueType || "" === venueType
    );

    const filteredVenues2 = filteredVenues.filter(
      (v) => v.name === venue || "" === venue
    );

    const filteredVenues3 = filteredVenues2.filter(
      (v) => v.address === venueArea || "" === venueArea
    );

    setFilteredVenues(filteredVenues3);
  }, [search]);

  return (
    <Flex w="full" h="full" direction="column">
      <SectionCarousel />

      <Box my={4} />

      <Flex align="center" justify="center">
        <Text fontSize="3xl" fontWeight="bold">
          Search Result
        </Text>
      </Flex>

      <Box mt={4} />

      <Box mx={{ base: 4, md: 16 }}>
        {filteredVenues.map((venue) => (
          <SearchItem {...venue} />
        ))}
      </Box>

      <Box my={4} />
      <Footer />
    </Flex>
  );
};

export default Search;
