import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    </Flex>
  );
};

export default Search;
