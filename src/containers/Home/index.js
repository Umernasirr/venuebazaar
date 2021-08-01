import { Flex, Stack, Box, Text, Icon, Divider } from "@chakra-ui/react";
import { FiSearch } from "react-icons/all";
import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";

const Home = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Header />

      <SubHeader />
      {/* How It works */}
      <Text align="center" fontWeight="bold" fontSize="3xl" py={10}>
        How It Works
      </Text>
      <Stack
        direction={["column", "row"]}
        align="flex-start"
        justify="space-between"
        spacing="24px"
        px={[5, 20, 20, 30]}
        w="full"
      >
        <Stack alignContent="center" width="full">
          <Box h="auto" width="full" textAlign="center">
            <Icon boxSize={20} as={FiSearch} />
          </Box>
          <Box h="auto" width="full" textAlign="center">
            <Text align="center" fontWeight="bold" fontSize="2xl">
              Search
            </Text>
          </Box>
          <Box h="auto" width="full" textAlign="center">
            <Text align="center" fontSize="medium">
              Find your perfect wedding venue without all the stress. Search by
              location, budget, styles, and capacity.
            </Text>
            <Box boxShadow="md" my={5} />
            <Text align="center" fontWeight="bold" fontSize="medium">
              Learn More...
            </Text>
          </Box>
        </Stack>
        <Stack alignContent="center" bg="red" width="full">
          <Box w="40px" h="40px">
            1
          </Box>
        </Stack>
        <Stack alignContent="center" bg="red" width="full">
          <Box w="40px" h="40px">
            1
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Home;
