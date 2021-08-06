import React, { useState } from "react";
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
  Input,
} from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ venue }) => {
  const [events, setEvents] = useState([]);

  const [showBookModal, setShowBookModal] = useState(false);
  const [calenderObj, setCalenderObj] = useState({});

  const handleSelect = ({ start, end }) => {
    const newEvent = {
      start,
      end,
      title: "Booked",
    };
    setEvents([...events, newEvent]);

    setShowBookModal(false);
  };

  const handleCheckBooked = ({ start, end }) => {
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
              <Text fontSize={18}>{venue.name}</Text>
            </Flex>

            <Box my={4} />

            <Flex w="full" justify="space-between">
              <Text fontSize={18}>Venue Cost:</Text>
              <Text fontSize={18}>{venue.price} PKR</Text>
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
