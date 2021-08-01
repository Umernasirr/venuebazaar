import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineDollar,
  AiOutlineDollarCircle,
  AiOutlineStar,
} from "react-icons/ai";

const SearchItem = ({ name, address, type, features, price }) => {
  return (
    <Flex w="full" justify="space-between" my={4} boxShadow="base" p={4}>
      <Flex>
        <Image
          borderRadius={16}
          height="200px"
          width="400px"
          borderRightRadius={10}
          objectFit="cover"
          src={"https://picsum.photos/600/600"}
        />

        <Flex mx={4} align="flex-start" direction="column">
          <Text fontSize="2xl">{name}</Text>
          <Box my={2} />
          <Text fontSize="lg">{address}</Text>
          <Box my={1} />

          <Text color="blackAlpha.800" fontSize="lg">
            {type}
          </Text>
          <Box my={1} />

          <Flex direction="row">
            {features.map((feat) => (
              <Flex align="center" justify="center" mr={2}>
                <AiOutlineStar />
                <Text ml={1}> {feat} </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Box>
        <Text fontSize="2xl">Price: {price} PKR. </Text>
      </Box>
    </Flex>
  );
};

export default SearchItem;
