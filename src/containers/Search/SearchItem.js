import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const SearchItem = ({ venue }) => {
  const {
    venueName,
    _id,
    venueAddress,
    venueType,
    venueMaxPrice,
    venueMinPrice,
    venueFacilities,
    venueCapacity,
    images,
  } = venue;
  const history = useHistory();
  return (
    <Flex
      w="full"
      direction={["column", "column", "row"]}
      justify="space-between"
      my={4}
      boxShadow="base"
      p={4}
      borderRadius={8}
      _hover={{ cursor: "pointer", bg: "brand.100" }}
      onClick={() => history.push(`/venueDetails/${_id}`)}
    >
      <Flex direction={["column", "column", "row"]} justify="center">
        <Image
          borderRadius={16}
          height="200px"
          width="400px"
          borderRightRadius={10}
          objectFit="cover"
          src={images[0]}
        />

        <Flex
          mx={4}
          my={{ base: 4, md: 0 }}
          direction="column"
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Text fontSize="2xl" textAlign={["center", "center", "left", "left"]}>
            {venueName}
          </Text>
          <Box my={2} />
          <Text fontSize="lg" textAlign={["center", "center", "left", "left"]}>
            {venueAddress}
          </Text>
          <Box my={1} />

          <Text color="blackAlpha.800" fontSize="lg">
            {venueType}
          </Text>
          <Box my={1} />

          <SimpleGrid columns={[2, 2, 2, 4]}>
            {venueFacilities.map((feat, i) => (
              <Flex
                key={i.toString()}
                justify="flex-start"
                align="center"
                mr={{ base: 1, md: 2 }}
                my={{ base: 4 }}
              >
                <Icon color="brand.600" as={AiOutlineStar} />
                <Text ml={1}> {feat} </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>

      <Box my={{ base: 2, md: 0 }} />

      <Flex direction="column" align="flex-end" justify="space-between" mb={12}>
        <IconButton
          variant="ghost"
          _hover={{ bg: "brand.600", color: "white" }}
          fontSize={32}
          borderRadius={8}
          py={4}
          icon={<AiOutlineHeart />}
        />

        <Flex direction="column" align="flex-end">
          <Text fontSize={["lg", "lg", "lg", "xl"]}>
            <Text color="black" as="span" px={2}>
              Price:
            </Text>
            {venueMaxPrice} - {venueMinPrice}
          </Text>
          <Box my={{ base: 1, md: 0 }} />
          <Text fontSize={["lg", "lg", "lg", "xl"]}>
            <Text color="black" as="span" px={2}>
              Seating:
            </Text>
            {venueCapacity} People
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SearchItem;
