import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SEARCH_AREA, SEARCH_TYPE, SEARCH_VENUE } from "../../constants/";
const venueBgImg = process.env.PUBLIC_URL + "/images/venue_bg.jpg";

const SectionCarousel = () => {
  return (
    <Flex w="full" bg="brand.100">
      <Flex
        py={20}
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
        <Text
          fontSize={{ base: 40, lg: 48 }}
          color="white"
          fontWeight="semibold"
          letterSpacing={1.2}
          textAlign="center"
        >
          Find your Perfect Venue
        </Text>
        <Box my={{ base: 2, md: 0 }} />
        <Text color="white" textAlign="center" fontSize={{ base: 24, lg: 36 }}>
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
          <Select h="60px" size="lg" placeholder="Select Venu" bg="white">
            {SEARCH_VENUE.map((venue) => (
              <option value={venue}>{venue}</option>
            ))}
          </Select>

          <Select h="60px" size="lg" placeholder="Select Area" bg="white">
            {SEARCH_AREA.map((area) => (
              <option value={area}>{area}</option>
            ))}
          </Select>

          <Select h="60px" size="lg" placeholder="Select Type" bg="white">
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
          >
            Submit
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SectionCarousel;
