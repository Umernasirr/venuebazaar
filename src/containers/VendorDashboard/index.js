import React, { useEffect, useState } from "react";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import ActiveBookings from "./ActiveBookings";
import ManageVenues from "./ManageVenues";
import { service } from "../../services/services";
import { clearVenues, setVenues } from "../../redux/venue";
import Page from "react-page-loading";
const VendorDashboard = () => {
  const user = useSelector((state) => state.user);
  const [localVenues, setLocalVenues] = useState([]);
  const [localPendingBooking, setlocalPendingBooking] = useState([]);
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    if (user === undefined || user.currentUser === undefined) {
      history.push("/");
      return;
    } else {
      const currentUser = user.currentUser;
      if (!currentUser) {
        history.push("/");
      }
      if (currentUser && currentUser.role !== "vendor") {
        // history.push("/");
        // UNCOMMENT THIS TALALA TO ONLY LET ROLE ADMIN GO HERE
        if (currentUser.role === "admin") {
          history.push("/adminDashboard");
        } else {
          history.push("/");
        }
      }
      getVenues();
      getBookings();
    }
  }, [useSelector, user]);

  const getBookings = () => {
    service
      .getAllBookingsByVendor(user.currentUser._id)
      .then(({ data }) => {
        if (data.success) {
          let pendingBooking = [];

          data.data.forEach((booking) => {
            if (booking.bookingStatus === "pending") {
              pendingBooking.push(booking);
            }
          });
          setlocalPendingBooking(pendingBooking);
        }
      })
      .catch((err) => console.log(err));
  };

  const getVenues = () => {
    service
      .getVenuesByVendor(user.currentUser._id)
      .then(({ data }) => {
        if (data.success) {
          dispatch(clearVenues());
          dispatch(setVenues(data.data));
          setLocalVenues(data.data);
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const acceptBooking = (booking) => {
    service
      .acceptBooking({ ...booking, bookingStatus: "confirm" })
      .then(({ data }) => {
        if (data.success) {
          getBookings();
        } else {
          console.log(data.error);
        }
      });
  };

  const deleteBooking = (id) => {
    service
      .removeBooking(id)
      .then(({ data }) => {
        if (data.success) {
          getBookings();
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
  };

  return (
    <Flex w="full" h="full" direction="column">
      <Page loader={"bar"} color={"#E62878"} size={12}>
        <Box my={4} />

        <Box mx={{ base: 4, md: 16 }}>
          <Flex justify="space-between" w="full" align="center">
            <Text
              textAlign={["center", "left", "left", "left"]}
              fontSize={26}
              fontWeight="semibold"
            >
              Welcome {user && user.currentUser && user.currentUser.firstName}.
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
            <ActiveBookings
              bookings={localPendingBooking}
              acceptBooking={acceptBooking}
              deleteBooking={deleteBooking}
            />
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
      </Page>
    </Flex>
  );
};

export default VendorDashboard;
