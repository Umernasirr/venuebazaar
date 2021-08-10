import React, { useEffect } from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import SectionHowItWorks from "./SectionHowItWorks";
import SectionVenue from "./SectionVenue";
import SectionEventPlanner from "./SectionEventPlanner";
import { service } from "../../services/services";
import { setVenues } from "../../redux/venue";
const Home = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => console.log(state, "state"));
  // useEffect(() => {
  //   service
  //     .getVenues()
  //     .then(({ data }) => {
  //       if (data.success) {
  //         console.log(data, "data coming from api");
  //         dispatch(setVenues({ venues: data.data }));
  //       } else {
  //         console.log(data.error);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
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
