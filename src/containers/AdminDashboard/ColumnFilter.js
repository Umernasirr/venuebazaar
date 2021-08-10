import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <Text>
      <Input
        variant="flushed"
        value={filterValue || ""}
        h="30px"
        onChange={(e) => setFilter(e.target.value)}
      />
    </Text>
  );
};

export default ColumnFilter;
