import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const venueBgImg = process.env.PUBLIC_URL + "/images/venue_bg.jpg";

const SectionCarousel = () => {
  return (
    <Flex w="full" bg="brand.100">
      <Flex
        w="full"
        h="400px"
        objectFit="contain"
        bgSize="cover"
        bgImage={venueBgImg}
        align="center"
        justify="center"
        direction="column"
      >
        <Text
          fontSize={48}
          color="white"
          fontWeight="semibold"
          letterSpacing={1.2}
        >
          Find your Perfect Venue
        </Text>

        <Text fontSize={36} color="white">
          Get your best venue at best price
        </Text>

        {/* Search List */}
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};

export default SectionCarousel;
