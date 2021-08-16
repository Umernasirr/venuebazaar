import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <Flex align="center">
      <Icon as={AiOutlineSearch} fontSize={16} />
      <Input
        variant="flushed"
        value={filterValue || ""}
        h="30px"
        onChange={(e) => setFilter(e.target.value)}
      />
    </Flex>
  );
};

export default ColumnFilter;
