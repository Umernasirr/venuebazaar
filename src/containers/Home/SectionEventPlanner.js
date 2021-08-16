import React from "react";
import { Box, SimpleGrid, Stack, Text, Flex } from "@chakra-ui/react";
import { VENUE_CONTENT2 } from "../../constants";

const SectionEventPlanner = (props) => {
  return (
    <React.Fragment>
      <Text
        align="center"
        fontWeight="bold"
        fontSize="3xl"
        px={[15, 15, 20, 20]}
        color="purple.600"
      >
        {props.title}
      </Text>
      <SimpleGrid
        columns={[1, 1, 3, 3]}
        px={[15, 15, 20, 20]}
        py={5}
        spacing={5}
      >
        {VENUE_CONTENT2.map(({ title, description, id, url }) => (
          <Stack
            key={id}
            direction={["column-reverse", "column-reverse"]}
            borderRadius={12}
          >
            <Flex
              w="full"
              display="flex"
              h="300px"
              align="center"
              justify="center"
              direction="column"
              bgImg={url}
            >
              <Box textAlign="center">
                <Text fontSize={20} fontWeight="bold">
                  {title}
                </Text>
                <Text fontSize={16}> {description} </Text>
              </Box>
            </Flex>
          </Stack>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default SectionEventPlanner;
