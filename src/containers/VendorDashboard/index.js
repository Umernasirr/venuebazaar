import React, { useEffect, useState } from "react";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import ActiveBookings from "./ActiveBookings";
import { BOOKINGS } from "../../constants/index";
import ManageVenues from "./ManageVenues";
import { service } from "../../services/services";
import { clearVenues, setVenues } from "../../redux/venue";
const VendorDashboard = () => {
  const user = useSelector((state) => state.user);
  const [localVenues, setLocalVenues] = useState([]);
  const dispatch = useDispatch();

  // console.log(currentUser._id);
  const history = useHistory();
  useEffect(() => {
    if (user === undefined || user.currentUser === undefined) {
      return;
    } else {
      console.log(user);
      getVenues();
    }
  }, [useSelector, user]);

  const getVenues = () => {
    service
      .getVenuesByVendor(user.currentUser._id)
      .then(({ data }) => {
        if (data.success) {
          dispatch(clearVenues());
          dispatch(setVenues(data.data));
          setLocalVenues(data.data);
          console.log(data.data, "data");
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteVenue = (id) => {
    service
      .deleteVenue(id)
      .then(({ data }) => {
        if (data.success) {
          getVenues();
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
    console.log(id, "delte id");
  };

  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ base: 4, md: 16 }}>
        <Flex justify="space-between" w="full" align="center">
          <Text
            textAlign={["center", "left", "left", "left"]}
            fontSize={26}
            fontWeight="semibold"
          >
            Welcome Talal.
          </Text>

          <Box mx={1} />
          <Button
            bg="brand.600"
            color="white"
            borderRadius={8}
            w="120px"
            h="56px"
            _focus={{ outline: "none" }}
            _hover={{ bg: "brand.800" }}
            onClick={() => {
              history.push("/vendorAddVenue");
            }}
          >
            Add Venue
          </Button>
        </Flex>
        <Box my={4} borderColor="brand.600" borderWidth={1} />
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <ActiveBookings bookings={BOOKINGS} />
          {localVenues && (
            <ManageVenues
              venues={localVenues}
              handleDeleteVenue={handleDeleteVenue}
            />
          )}
        </SimpleGrid>
      </Box>
      <Box my={4} />
      <Footer />
    </Flex>
  );
};

export default VendorDashboard;
