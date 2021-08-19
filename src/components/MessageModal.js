import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";

const MessageModal = ({ isMessageOpen, setIsMessageOpen, title, message }) => {
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <Modal
      isOpen={isMessageOpen}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      onClose={() => {
        setIsMessageOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent mx={{ base: 2 }}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="m">{message}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            bg="brand.600"
            color="white"
            _hover={{ bg: "brand.800" }}
            _active={{ bg: "brand.400" }}
            mr={3}
            px={8}
            onClick={() => {
              setIsMessageOpen(false);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MessageModal;
