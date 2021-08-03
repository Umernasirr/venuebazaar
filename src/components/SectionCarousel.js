import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SEARCH_AREA, SEARCH_TYPE, SEARCH_VENUE } from "../constants";
import { useHistory } from "react-router-dom";

const venueBgImg = process.env.PUBLIC_URL + "/images/venue_bg.jpg";

const SectionCarousel = () => {
  const [venue, setVenue] = useState("");
  const [venueArea, setVenueArea] = useState("");
  const [venueType, setVenueType] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/search?q=${venue}&${venueArea}&${venueType}`);
  };
  return (
    <Flex w="full" bg="gray.200">
      <Flex
        py={{ base: 16, md: 30 }}
        px={{ base: 4 }}
        objectFit="contain"
        bgSize="cover"
        bgImage={venueBgImg}
        align="center"
        justify="center"
        direction="column"
        w="100%"
        h="auto"
      >
        <Box mt={12} />

        <Text
          fontSize={{ base: 40, lg: 40 }}
          color="white"
          fontWeight="semibold"
          letterSpacing={1}
          textAlign="center"
        >
          Find your Perfect Venue
        </Text>
        <Box my={{ base: 2, md: 0 }} />
        <Text color="white" textAlign="center" fontSize={{ base: 24, lg: 28 }}>
          Get your best venue at best price
        </Text>

        {/* Search List */}

        <Box mt={16} />
        <Stack
          w="full"
          align="center"
          px={{ base: 4, md: 16 }}
          direction={["column", "row"]}
          spacing="16px"
        >
          <Select
            h="60px"
            size="lg"
            placeholder="Select Venue"
            bg="white"
            onChange={(e) => setVenue(e.target.value)}
          >
            {SEARCH_VENUE.map((venue) => (
              <option value={venue}>{venue}</option>
            ))}
          </Select>

          <Select
            h="60px"
            size="lg"
            placeholder="Select Area"
            bg="white"
            onChange={(e) => setVenueArea(e.target.value)}
          >
            {SEARCH_AREA.map((area) => (
              <option value={area}>{area}</option>
            ))}
          </Select>

          <Select
            h="60px"
            size="lg"
            placeholder="Select Type"
            bg="white"
            onChange={(e) => setVenueType(e.target.value)}
          >
            {SEARCH_TYPE.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </Select>

          <Button
            height="60px"
            width="30%"
            bg="brand.600"
            color="white"
            _hover={{ backgroundColor: "brand.800" }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Stack>

        <Box mt={16} />
      </Flex>
    </Flex>
  );
};

export default SectionCarousel;
