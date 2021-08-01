import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionCarousel from "../../components/SectionCarousel";

const Search = (match, location) => {
  const { search } = useLocation();

  useEffect(() => {
    const searchTxt = search.replace("?q=", "");

    console.log(searchTxt.split("&")); //feck u
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
    </Flex>
  );
};

export default Search;
