import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Flex,
  Box,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import DropZoneImage from "../../components/DropZoneImage";
import Footer from "../../components/Footer";

import { Colors } from "../../utility/theme";
const VendorAddVenue = () => {
  const animatedComponents = makeAnimated();

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: Colors.brand[800],
      };
    },
  };

  const OPTIONS = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ sm: 0, md: 32 }} bg="gray.100" p={4} borderRadius={8}>
        <Flex w="full" align="center">
          <FormControl id="venueName">
            <FormLabel>Venue Name</FormLabel>
            <Input type="text" placeholder="Enter Venue Name" bg="white" />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueType">
            <FormLabel>Venue Type</FormLabel>

            <Select
              placeholder="Select Type"
              bg="white"
              color="gray.400"
              _focus={{ color: "black" }}
            >
              <option value="normal">Normal</option>
              <option value="banquet">Banquet</option>
            </Select>
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueAddress">
            <FormLabel>Venue address</FormLabel>
            <Input type="text" placeholder="Enter Venue Address" bg="white" />
          </FormControl>
          <Box mx={{ base: 1, md: 2 }} />

          <FormControl id="venueType">
            <FormLabel>Select Town</FormLabel>

            <Select
              placeholder="Select Town"
              bg="white"
              color="gray.400"
              _focus={{ color: "black" }}
            >
              <option value="abidabad">Abidabad</option>
              <option value="afridicolony">AfridiColony</option>
            </Select>
          </FormControl>
          <Box mx={{ base: 1, md: 2 }} />

          <FormControl id="venueAddress">
            <FormLabel>Venue address</FormLabel>
            <Input type="text" placeholder="Enter Venue Address" bg="white" />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueTelephone1">
            <FormLabel>Venue Telephone No.1</FormLabel>
            <Input
              type="text"
              placeholder="Enter Telephone No.1 value"
              bg="white"
            />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueTelephone2">
            <FormLabel>Venue Telephone No.2</FormLabel>
            <Input
              type="text"
              placeholder="Enter Telephone No.2 value"
              bg="white"
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueEmail">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="text"
              placeholder="Enter Telephone No.1 value"
              bg="white"
            />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueWebsite">
            <FormLabel>Venue Website</FormLabel>
            <Input
              type="text"
              placeholder="Enter Telephone No.2 value"
              bg="white"
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueDescription">
            <FormLabel>Venue Description</FormLabel>
            <Textarea placeholder="Enter Venue Description" bg="white" />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueMinPrice">
            <FormLabel>Venue Min Price</FormLabel>
            <Input type="text" placeholder="0" bg="white" />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueMaxPrice">
            <FormLabel>Venue Max Price</FormLabel>
            <Input type="text" placeholder="0" bg="white" />
          </FormControl>

          <Box mx={2} />

          <FormControl id="venueCapacity">
            <FormLabel>Venue Capacity</FormLabel>
            <Input type="text" placeholder="0" bg="white" />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center" justify="left">
          <SimpleGrid w="full" columns={[1, 1, 1, 2]}>
            <FormControl id="venueType">
              <FormLabel>Select Facility</FormLabel>

              <ReactSelect
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={OPTIONS}
                styles={colourStyles}
              />
            </FormControl>

            <FormControl
              mt={{ base: 4, md: 0 }}
              ml={{ base: 0, md: 2 }}
              id="venueGoogleMap"
            >
              <FormLabel>Venue Google Map</FormLabel>
              <Input
                type="text"
                placeholder="Enter Google Map Key"
                bg="white"
              />
            </FormControl>
          </SimpleGrid>
        </Flex>

        <Flex p={4}>
          <DropZoneImage />
        </Flex>

        {/*  */}
      </Box>

      <Box my={4} />
      <Footer />
      {/*  */}
    </Flex>
  );
};

export default VendorAddVenue;
