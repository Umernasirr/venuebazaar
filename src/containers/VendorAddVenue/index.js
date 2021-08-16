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
import PictureWall from "../../components/PictureWall";

const VendorAddVenue = ({ match }) => {
  const [towns, setTowns] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [venueDetails, setVenueDetails] = useState({
    id: null,
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
  const [images, setImages] = useState([]);
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [imageChange, setImageChange] = useState([]);

  const animatedComponents = makeAnimated();

  const {
    id,
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
  } = venueDetails;

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

  const HandleEditVenue = (venue) => {
    venue.images = imageChange;

    service
      .updateVenue(id, { venue })
      .then(({ data }) => {
        if (data.success) {
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const HandleAddVenue = (acceptedFiles, venue) => {
    const formData = new FormData();
    acceptedFiles.forEach((files) => {
      files.forEach((file) => {
        formData.append("media", file);
      });
    });
    formData.set("venue", JSON.stringify(venue));
    service
      .addVenue(formData)
      .then((data) => {
        console.log(data, "response data");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
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
    if (!isUpdate) {
      HandleAddVenue(acceptedFiles, venue);
    } else {
      HandleEditVenue(venue);
    }
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

  const handleFacilitiesForUpdate = (facilities) => {
    let venueFacilities = [];
    FACILITY_CONTENT.forEach((facility) => {
      if (facilities.includes(facility.label)) {
        venueFacilities.push(facility);
      }
    });
    // setVenueDetails({
    //   ...venueDetails,
    //   selectedFacilities: venueFacilities,
    // });
    return venueFacilities;
  };

  const getVenue = () => {
    service
      .getVenue(match.params.id)
      .then(({ data }) => {
        if (data.success) {
          const {
            venueName,
            venueType,
            venueAddress,
            venueTown,
            venueCity,
            venueTel1: venueTelephone1,
            venueTel2: venueTelephone2,
            venueEmail,
            venueWebsite,
            venueDescription,
            venueMinPrice,
            venueMaxPrice,
            venueCapacity,
            venueFacilities,
            images,
            _id,
          } = data.data;
          setImages(images);
          setImageChange(images);
          setVenueDetails({
            venueName,
            venueType,
            venueAddress,
            selectedTown: venueTown._id,
            venueCity,
            venueTelephone1,
            venueTelephone2,
            venueEmail,
            venueWebsite,
            venueDescription,
            venueMinPrice,
            venueMaxPrice,
            venueCapacity,
            selectedFacilities: handleFacilitiesForUpdate(venueFacilities),
            id: _id,
          });
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (match && match.params && match.params.id) {
      setIsUpdate(true);

      getVenue();
      // setVenueDetails(...state.venue);
    } else {
      setIsUpdate(false);
    }
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
              value={venueName}
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
              value={venueType}
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
              value={venueAddress}
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
              value={selectedTown}
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
              value={venueCity}
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
              value={venueTelephone1}
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
              value={venueTelephone2}
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
              value={venueEmail}
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
              value={venueWebsite}
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
              value={venueDescription}
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
              value={venueMinPrice}
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
              value={venueMaxPrice}
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
              value={venueCapacity}
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
          <SimpleGrid w="full" columns={[1, 1, 1, 1]}>
            <FormControl id="venueType" isRequired="true">
              <FormLabel>Select Facility</FormLabel>

              <ReactSelect
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={FACILITY_CONTENT}
                value={selectedFacilities}
                styles={colourStyles}
                onChange={(items) =>
                  setVenueDetails({
                    ...venueDetails,
                    selectedFacilities: items,
                  })
                }
              />
            </FormControl>
          </SimpleGrid>
        </Flex>

        <Flex p={0} mt={3}>
          {!isUpdate ? (
            <DropZoneImage
              acceptedFiles={acceptedFiles}
              setAcceptedFiles={setAcceptedFiles}
            />
          ) : (
            images.length > 0 &&
            id && (
              <PictureWall
                images={images}
                id={id}
                setImageChange={setImageChange}
              />
            )
          )}
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
