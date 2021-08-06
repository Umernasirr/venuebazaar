import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Flex,
  Box,
  Select,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import DropZoneImage from "../../components/DropZoneImage";
import Footer from "../../components/Footer";

import { Colors } from "../../utility/theme";
import { service } from "../../services/services";
import { FACILITY_CONTENT } from "../../constants";

const VendorAddVenue = () => {
  const [towns, setTowns] = useState([]);
  const [venueDetails, setVenueDetails] = useState({
    venueName: "",
    venueType: "",
    venueAddress: "",
    selectedTown: "",
    venueTelephone1: "",
    venueTelephone2: "",
    venueEmail: "",
    venueWebsite: "",
    venueDescription: "",
    venueCity: "",
    venueMinPrice: "",
    venueMaxPrice: "",
    venueCapacity: "",
    selectedFacilities: [],
    venueGoogleKey: "",
    selectedFiles: [],
  });
  const [error, setError] = useState("");
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const animatedComponents = makeAnimated();

  const {
    venueName,
    venueType,
    venueAddress,
    selectedTown,
    venueTelephone1,
    venueTelephone2,
    venueEmail,
    venueWebsite,
    venueDescription,
    venueCity,
    venueMinPrice,
    venueMaxPrice,
    venueCapacity,
    selectedFacilities,
    venueGoogleKey,
    selectedFilesselectedFacilities,
  } = venueDetails;

  const isFormEmpty = () => {
    return (
      !venueName.length ||
      !venueType.length ||
      !venueAddress.length ||
      !selectedTown.length ||
      !venueCity.length ||
      !venueTelephone1.length ||
      !venueEmail.length ||
      !venueDescription.length ||
      !venueMinPrice.length ||
      !venueMaxPrice.length ||
      !venueCapacity.length ||
      !selectedFacilities.length ||
      !selectedFilesselectedFacilities.length
    );
  };

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

  const handleSubmit = () => {
    console.log(venueDetails);
    console.log(acceptedFiles, "accepted");
    // console.log(isNaN(venueCapacity));
    const venue = {
      venueName,
      venueType,
      venueAddress,
      venueTown: selectedTown,
      venueCity,
      venueTel1: venueTelephone1,
      venueTel2: venueTelephone2,
      venueEmail,
      venueWebsite,
      venueDescription,
      venueMinPrice,
      venueMaxPrice,
      venueCapacity,
      venueFacilities: selectedFacilities.map((data) => data.label),
    };
    const formData = new FormData();
    acceptedFiles.map((files) => {
      // console.log(files);
      files.map((file) => {
        // console.log(file[0], "ful");
        formData.append("media", file);
      });
    });
    // // formData.append("venue", venue);
    formData.set("venue", JSON.stringify(venue));
    // formData.
    // console.log(formData.get("media"), "venueue");
    service
      .addVenue(formData)
      .then((data) => {
        console.log(data, "response data");
      })
      .catch((err) => console.log(err));
  };

  const getTowns = () => {
    service
      .getTowns()
      .then(({ data }) => {
        if (data.success) {
          setTowns(data.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTowns();
  }, []);
  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ sm: 0, md: 32 }} bg="gray.100" p={4} borderRadius={8}>
        <Flex w="full" align="center">
          <FormControl id="venueName" isRequired="true">
            <FormLabel>Venue Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Venue Name"
              bg="white"
              onChange={(e) =>
                setVenueDetails({ ...venueDetails, venueName: e.target.value })
              }
            />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueType" isRequired="true">
            <FormLabel>Venue Type</FormLabel>

            <Select
              placeholder="Select Type"
              bg="white"
              color="gray.400"
              _focus={{ color: "black" }}
              onChange={(e) =>
                setVenueDetails({ ...venueDetails, venueType: e.target.value })
              }
            >
              <option value="normal">Normal</option>
              <option value="banquet">Banquet</option>
            </Select>
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueAddress" isRequired="true">
            <FormLabel>Venue Address</FormLabel>
            <Input
              type="text"
              placeholder="Enter Venue Address"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueAddress: e.target.value,
                })
              }
            />
          </FormControl>
          <Box mx={{ base: 1, md: 2 }} />

          <FormControl id="venueType" isRequired="true">
            <FormLabel>Select Town</FormLabel>

            <Select
              placeholder="Select Town"
              bg="white"
              color="gray.400"
              _focus={{ color: "black" }}
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  selectedTown: e.target.value,
                })
              }
            >
              {towns &&
                towns.map((town) => (
                  <option value={town._id}>{town.area}</option>
                ))}
            </Select>
          </FormControl>
          <Box mx={{ base: 1, md: 2 }} />

          <FormControl id="venueAddress" isRequired="true">
            <FormLabel>Venue City</FormLabel>
            <Input
              type="text"
              placeholder="Enter Venue City"
              bg="white"
              onChange={(e) =>
                setVenueDetails({ ...venueDetails, venueCity: e.target.value })
              }
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueTelephone1" isRequired="true">
            <FormLabel>Venue Telephone No.1</FormLabel>
            <Input
              type="text"
              placeholder="Enter Telephone No.1 value"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueTelephone1: e.target.value,
                })
              }
            />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueTelephone2">
            <FormLabel>Venue Telephone No.2</FormLabel>
            <Input
              type="text"
              placeholder="Enter Telephone No.2 value"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueTelephone2: e.target.value,
                })
              }
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueEmail" isRequired="true">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="text"
              placeholder="Enter Email"
              bg="white"
              onChange={(e) =>
                setVenueDetails({ ...venueDetails, venueEmail: e.target.value })
              }
            />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueWebsite">
            <FormLabel>Venue Website</FormLabel>
            <Input
              type="text"
              placeholder="Venue Website"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueWebsite: e.target.value,
                })
              }
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueDescription" isRequired="true">
            <FormLabel>Venue Description</FormLabel>
            <Textarea
              placeholder="Enter Venue Description"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueDescription: e.target.value,
                })
              }
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center">
          <FormControl id="venueMinPrice" isRequired="true">
            <FormLabel>Venue Min Price</FormLabel>
            <Input
              type="text"
              placeholder="0"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueMinPrice: e.target.value,
                })
              }
            />
          </FormControl>
          <Box mx={2} />

          <FormControl id="venueMaxPrice" isRequired="true">
            <FormLabel>Venue Max Price</FormLabel>
            <Input
              type="text"
              placeholder="0"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueMaxPrice: e.target.value,
                })
              }
            />
          </FormControl>

          <Box mx={2} />

          <FormControl id="venueCapacity" isRequired="true">
            <FormLabel>Venue Capacity</FormLabel>
            <Input
              type="text"
              placeholder="0"
              bg="white"
              onChange={(e) =>
                setVenueDetails({
                  ...venueDetails,
                  venueCapacity: e.target.value,
                })
              }
            />
          </FormControl>
        </Flex>

        <Box my={4} />

        <Flex w="full" align="center" justify="left">
          <SimpleGrid w="full" columns={[1, 1, 1, 2]}>
            <FormControl id="venueType" isRequired="true">
              <FormLabel>Select Facility</FormLabel>

              <ReactSelect
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={FACILITY_CONTENT}
                styles={colourStyles}
                onChange={(items) =>
                  setVenueDetails({
                    ...venueDetails,
                    selectedFacilities: items,
                  })
                }
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
                onChange={(e) =>
                  setVenueDetails({
                    ...venueDetails,
                    venueGoogleKey: e.target.value,
                  })
                }
              />
            </FormControl>
          </SimpleGrid>
        </Flex>

        <Flex p={0}>
          <DropZoneImage
            acceptedFiles={acceptedFiles}
            setAcceptedFiles={setAcceptedFiles}
          />
        </Flex>

        {/*  */}

        <Box my={4} />
        <Flex w="full" align="center" justify="center">
          <Button
            borderRadius={8}
            w="100%"
            h="56px"
            p={4}
            bg="brand.600"
            color="white"
            onClick={handleSubmit}
            _hover={{ bg: "brand.800" }}
          >
            Submit
          </Button>
        </Flex>
      </Box>

      <Box my={4} />

      <Footer />

      {/*  */}
    </Flex>
  );
};

export default VendorAddVenue;
