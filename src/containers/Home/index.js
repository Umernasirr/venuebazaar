import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import SectionCarousel from "./SectionCarousel";

const Home = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Header />

      <SubHeader />

      <SectionCarousel />
    </Flex>
  );
};

export default Home;
