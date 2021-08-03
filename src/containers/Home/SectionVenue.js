import React from "react";
import { Box, SimpleGrid, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { VENUE_CONTENT } from "../../constants";

const SectionVenue = (props) => {
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
        columns={[1, 1, 2, 2]}
        px={[15, 15, 20, 20]}
        py={5}
        spacing={5}
      >
        {VENUE_CONTENT.map((data) => (
          <Stack
            key={data.id}
            direction={["column-reverse", "row"]}
            borderRadius={10}
            borderWidth={1}
            borderColor="gray.800"
          >
            <Flex
              w="full"
              display="flex"
              h="full"
              align="center"
              justify="center"
              direction="column"
            >
              <Text fontWeight="bolder" fontSize="large">
                {data.title}
              </Text>
              <Text fontSize="medium">{data.description}</Text>
            </Flex>
            <Box display="flex" justifyContent="flex-end" width="full">
              <Image
                width="full"
                height="150px"
                borderRightRadius={10}
                objectFit="cover"
                src={data.url}
                alt={data.alt}
              />
            </Box>
          </Stack>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default SectionVenue;
