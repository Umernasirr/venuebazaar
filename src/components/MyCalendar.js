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
  const [title, setTitle] = useState("");
  const [calenderObj, setCalenderObj] = useState({});

  const handleSelect = ({ start, end }) => {
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
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
        style={{ height: 600, width: 600, fontSize: 20 }}
        views={["month"]}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={({ start, end }) => {
          setCalenderObj({ start, end });

          setShowBookModal(!showBookModal);
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
              <Text fontSize={20} fontWeight="semibold">
                Book Event For:
              </Text>
              <Text fontSize={20}>
                {calenderObj.start?.toISOString().slice(0, 10)}
              </Text>
            </Flex>

            <Box my={4} />

            <Flex w="full" justify="space-between">
              <Text fontSize={20} fontWeight="semibold">
                Book Event At:
              </Text>
              <Text fontSize={20}>{venue.name}</Text>
            </Flex>

            <Box my={4} />

            <Flex w="full" justify="space-between">
              <Text fontSize={20} fontWeight="semibold">
                Venue Cost:
              </Text>
              <Text fontSize={20}>{venue.price} PKR</Text>
            </Flex>

            <Box my={4} />

            <Text>Your Event's Title</Text>
            <Box my={2} />

            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <Box my={2} />

            <Text fontSize={18}>
              Are you sure you want to Confirm your Booking?
            </Text>

            <Box my={4} />
          </ModalBody>

          <ModalFooter>
            <Button
              bg="transparent"
              color="brand.600"
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
