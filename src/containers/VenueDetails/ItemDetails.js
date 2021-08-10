import { Box, Flex, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheckCircle, AiOutlineStar } from "react-icons/ai";

const ItemDetails = ({ selectedItem }) => {
  console.log(selectedItem, "selec");
  return (
    <Flex direction="column">
      <Text fontWeight="semibold" fontSize={24}>
        {selectedItem.venueName}
      </Text>

      <Box my={1} />
      <Text color="gray.700" fontSize={16}>
        {selectedItem.venueAddress}
      </Text>

      <Box my={{ base: 2, md: 4 }} />

      <Image
        borderRadius={8}
        height="350px"
        width="700px"
        borderRightRadius={10}
        objectFit="cover"
        src={selectedItem.images[0]}
      />

      <Box my={{ base: 2, md: 4 }} />

      <Text fontWeight="semibold" fontSize={24}>
        About {selectedItem.venueName}
      </Text>
      <Box my={1} />

      <Text>{selectedItem.description}</Text>

      <Box my={{ base: 2, md: 4 }} />

      <Text fontWeight="semibold" fontSize={24}>
        Features
      </Text>

      <Box my={1} />

      <SimpleGrid columns={[2, 2, 2, 4]}>
        {selectedItem.venueFacilities.map((feature, i) => (
          <Flex key={i.toString()} w="full" justify="flex-start" align="center">
            <Icon color="brand.600" as={AiOutlineStar} />
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
            {selectedItem.venueCapacity} People
          </Text>
        </Flex>

        <Box my={1} />
        <Flex align="center">
          <Icon color="brand.600" mr={2} as={AiOutlineCheckCircle} />
          <Text fontSize={["xs", "xs", "xs", "md"]} ml={1}>
            Price:
          </Text>
          <Text fontSize="md" ml={1}>
            {selectedItem.venueMaxPrice} - {selectedItem.venueMinPrice}
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default ItemDetails;
