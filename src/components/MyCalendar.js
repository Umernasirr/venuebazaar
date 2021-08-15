import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { baseurl } from "../utility/constants/baseurl";
import axios from "axios";
import { useSelector } from "react-redux";
import { service } from "../services/services";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ venue }) => {
  const [events, setEvents] = useState([]);
  const [showBookModal, setShowBookModal] = useState(false);
  const [calenderObj, setCalenderObj] = useState({});
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleSelect = async ({ start, end }) => {
    const newEvent = {
      start: start,
      end: start,
      title: "Booked",
    };

    const bookingStatus = currentUser.role === "vendor" ? "confirm" : "pending";

    const postObj = {
      venue: venue._id,
      bookingDate: start.toString(),
      bookingStatus,
      vendor: currentUser._id,
    };

    const res = await service.createBooking(postObj);

    if (res.data.success) {
      setEvents([...events, newEvent]);
      setShowBookModal(false);
    } else {
      console.log(res.data.error);
    }
  };

  const handleCheckBooked = ({ start }) => {
    const today = new Date();

    const foundEvent = events.filter(
      (event) =>
        event.start.toISOString().slice(0, 10) ===
        start.toISOString().slice(0, 10)
    );

    if (foundEvent.length > 0 || start.getTime() < today.getTime()) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const getBookings = async () => {
      const res = await axios.get(`${baseurl}booking/venue/${venue._id}`);

      const bookings = res.data.bookings;

      const tempEvents = bookings.map((booking) => {
        return {
          start: new Date(booking.bookingDate),
          end: new Date(booking.bookingDate),
          title: "Booked",
        };
      });

      setEvents(tempEvents);
    };

    getBookings();
  }, []);

  return (
    <Flex>
      <Calendar
        selectable
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, width: 600, fontSize: 14 }}
        views={["month"]}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={({ start, end }) => {
          setCalenderObj({ start, end });

          if (handleCheckBooked({ start, end })) {
            setShowBookModal(!showBookModal);
          } else {
            alert(
              "Date is Already Booked, or has passed. Kindly Select a Valid Date"
            );
          }
        }}
      />

      <Modal
        isOpen={showBookModal}
        onClose={() => setShowBookModal(!showBookModal)}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Event Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex w="full" justify="space-between">
              <Text fontSize={18}>Book Event For:</Text>
              <Text fontSize={18}>
                {calenderObj.start?.toISOString().slice(0, 10)}
              </Text>
            </Flex>

            <Box my={4} />

            <Flex w="full" justify="space-between">
              <Text fontSize={18}>Book Event At:</Text>
              <Text fontSize={18}>{venue.venueName}</Text>
            </Flex>

            <Box my={4} />

            <Flex w="full" justify="space-between">
              <Text fontSize={18}>Venue Cost:</Text>
              <Text fontSize={18}>
                {venue.venueMinPrice} - {venue.venueMaxPrice} PKR
              </Text>
            </Flex>

            <Box my={8} boxShadow="sm" />

            <Text fontSize={18}>
              Are you sure you want to Confirm your Booking?
            </Text>

            <Box my={2} />
          </ModalBody>

          <ModalFooter>
            <Button
              bg="transparent"
              color="gray.700"
              mr={3}
              onClick={() => setShowBookModal(false)}
            >
              Cancel Booking
            </Button>
            <Button
              variant="ghost"
              bg="brand.600"
              color="white"
              _hover={{ bg: "brand.800" }}
              _active={{ bg: "brand.400" }}
              onClick={() => handleSelect(calenderObj)}
            >
              Confirm Booking
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default MyCalendar;
