import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Flex justify="flex-end" align="center" my={4}>
      <Text fontSize={14}>Search</Text>

      <Box mx={1} />
      <Input
        w="40%"
        variant="outline"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </Flex>
  );
};

export default GlobalFilter;
