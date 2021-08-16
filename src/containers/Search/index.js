import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import SearchItem from "./SearchItem";

const Search = (match, location) => {
  const { venues: venuesData } = useSelector((state) => state.venue);
  const { search } = useLocation();
  const [filteredVenues, setFilteredVenues] = useState([]);
  useEffect(() => {
    const searchTxt = search.replace("?q=", "");
    const queryStrings = searchTxt.split("&");
    const venue = queryStrings[0];
    const venueArea = queryStrings[1];
    const venueType = queryStrings[2];

    let filteredVenues = venuesData.filter(
      (v) =>
        v.venueType?.toLowerCase() === venueType.toLowerCase() ||
        "" === venueType
    );

    const filteredVenues2 = filteredVenues.filter(
      (v) => v.venueName?.toLowerCase() === venue.toLowerCase() || "" === venue
    );

    const filteredVenues3 = filteredVenues2.filter(
      (v) =>
        v.venueTown?.area?.toLowerCase() === venueArea.toLowerCase() ||
        "" === venueArea
    );

    const now = new Date();

    const filteredVenues4 = filteredVenues3.filter((venue) => {
      console.log(now, new Date(venue.fromActiveDate));
      return (
        new Date(venue.fromActiveDate).getTime() <= now.getTime() &&
        new Date(venue.toActiveDate).getTime() > now.getTime()
      );
    });

    setFilteredVenues(filteredVenues4);
  }, [search, venuesData]);

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
        {filteredVenues &&
          filteredVenues.map((venue) => <SearchItem venue={venue} />)}
      </Box>

      <Box my={4} />
      <Footer />
    </Flex>
  );
};

export default Search;
