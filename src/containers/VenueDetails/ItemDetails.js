import { Box, Flex, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheckCircle, AiOutlineStar } from "react-icons/ai";

const ItemDetails = ({ selectedItem }) => {
  return (
    <Flex direction="column">
      <Text fontWeight="semibold" fontSize={24}>
        {selectedItem.name}
      </Text>

      <Box my={1} />
      <Text color="gray.700" fontSize={16}>
        {selectedItem.address}
      </Text>

      <Box my={{ base: 2, md: 4 }} />

      <Image
        borderRadius={8}
        height="350px"
        width="700px"
        borderRightRadius={10}
        objectFit="cover"
        src={"https://picsum.photos/600/600"}
      />

      <Box my={{ base: 2, md: 4 }} />

      <Text fontWeight="semibold" fontSize={24}>
        About {selectedItem.name}
      </Text>
      <Box my={1} />

      <Text>{selectedItem.description}</Text>

      <Box my={{ base: 2, md: 4 }} />

      <Text fontWeight="semibold" fontSize={24}>
        Features
      </Text>

      <Box my={1} />

      <SimpleGrid columns={[2, 2, 2, 4]}>
        {selectedItem.features.map((feature) => (
          <Flex w="full" justify="flex-start" align="center">
            <AiOutlineStar color="red" />
            <Box mr={1} />
            <Text>{feature}</Text>
          </Flex>
        ))}
      </SimpleGrid>

      <Box my={{ base: 2, md: 4 }} />

      <Text fontWeight="semibold" fontSize={24}>
        Venue Details
      </Text>
      <Box my={1} />

      <SimpleGrid columns={1}>
        <Flex align="center">
          <Icon color="brand.600" mr={2} as={AiOutlineCheckCircle} />
          <Text fontSize="md">Seating: </Text>
          <Text fontSize={["xs", "xs", "xs", "md"]} ml={1}>
            {selectedItem.seating} People
          </Text>
        </Flex>

        <Box my={1} />
        <Flex align="center">
          <Icon color="brand.600" mr={2} as={AiOutlineCheckCircle} />
          <Text fontSize={["xs", "xs", "xs", "md"]} ml={1}>
            Price:
          </Text>
          <Text fontSize="md" ml={1}>
            {selectedItem.price}
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default ItemDetails;
