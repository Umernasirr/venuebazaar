import React from "react";
import { Stack, Box, Text, Icon } from "@chakra-ui/react";
import { HOW_IT_WORKS_CONTENT } from "../../constants";

const SectionHowItWorks = () => {
  return (
    <React.Fragment>
      <Text
        align="center"
        fontWeight="bold"
        fontSize="3xl"
        px={[15, 15, 20, 20]}
        py={[10, 10, 10, 10]}
      >
        How It Works
      </Text>
      <Stack
        direction={["column", "row"]}
        align="flex-start"
        justify="space-between"
        spacing="24px"
        px={[15, 15, 20, 20]}
        pb={20}
        w="full"
      >
        {HOW_IT_WORKS_CONTENT.map((data) => (
          <Stack key={data.id} alignContent="center" width="full">
            <Box h="auto" width="full" textAlign="center">
              <Icon boxSize={20} as={data.iconName} />
            </Box>
            <Box h="auto" width="full" textAlign="center">
              <Text align="center" fontWeight="bold" fontSize="2xl">
                {data.title}
              </Text>
            </Box>
            <Box h="auto" width="full" textAlign="center">
              <Text align="center" fontSize="medium">
                {data.description}
              </Text>
              <Box boxShadow="md" my={5} />
              <Text align="center" fontWeight="bold" fontSize="medium">
                Learn More...
              </Text>
            </Box>
          </Stack>
        ))}
      </Stack>
    </React.Fragment>
  );
};

export default SectionHowItWorks;
