import React, { useState } from "react";
import {
  Flex,
  Stack,
  Box,
  Text,
  Icon,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/all";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
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
