import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";

const Home = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Header />
      <SubHeader />
    </Flex>
  );
};

export default Home;
