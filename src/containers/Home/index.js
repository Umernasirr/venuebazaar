import React from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import SectionHowItWorks from "./SectionHowItWorks";
import SectionVenue from "./SectionVenue";
import SectionEventPlanner from "./SectionEventPlanner";

const Home = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <SectionCarousel />
      <SectionHowItWorks />
      <SectionVenue title="Venue" />
      <Box my={4} />
      <SectionEventPlanner title="Event Planner" />
      <Box my={4} />

      <SectionVenue title="Catering" />
      <Spacer />
      <Box my={4} />
      <Footer />
    </Flex>
  );
};

export default Home;
