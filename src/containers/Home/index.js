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
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import SectionCarousel from "./SectionCarousel";
import SectionHowItWorks from "./SectionHowItWorks";
import SectionVenue from "./SectionVenue";
const Home = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Header />
      <SubHeader />
      <SectionCarousel />
      <SectionHowItWorks />
      <SectionVenue title="Venue" />
      <SectionVenue title="Event Planner" />
      <SectionVenue title="Catering" />
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Home;
