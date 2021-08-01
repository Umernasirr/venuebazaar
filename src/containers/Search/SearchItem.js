import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const SearchItem = ({ name }) => {
  return (
    <Flex w="full">
      <Image
        borderRadius={16}
        height="200px"
        width="400px"
        borderRightRadius={10}
        objectFit="cover"
        src={"https://picsum.photos/600/600"}
      />
      <Text>{name}</Text>
    </Flex>
  );
};

export default SearchItem;
