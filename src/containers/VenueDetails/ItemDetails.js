import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const ItemDetails = ({ selectedItem }) => {
  return (
    <Flex direction="column">
      <Text fontWeight="semibold" fontSize={26}>
        {selectedItem.name}
      </Text>

      <Box my={1} />
      <Text color="gray.700" fontSize={16}>
        {selectedItem.address}
      </Text>

      <Box my={4} />

      <Image
        borderRadius={8}
        height="350px"
        width="700px"
        borderRightRadius={10}
        objectFit="cover"
        src={"https://picsum.photos/600/600"}
      />

      <Box my={4} />

      <Text fontWeight="semibold" fontSize={26}>
        About {selectedItem.name}
      </Text>
      <Box my={1} />

      <Text>{selectedItem.description}</Text>

      <Box my={4} />

      <Text fontWeight="semibold" fontSize={26}>
        Features
      </Text>

      <Box my={1} />

      <Flex>
        {selectedItem.features.map((feature) => (
          <Flex w="full" justify="flex-start" align="center">
            <AiOutlineStar color="red" />
            <Box mr={1} />
            <Text>{feature}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ItemDetails;
