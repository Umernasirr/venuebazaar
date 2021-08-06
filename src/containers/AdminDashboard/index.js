import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import { useTable } from "react-table";
import VendorTable from "./VendorTable";
import ColumnFilter from "./ColumnFilter";
const AdminDashboard = () => {
  // STATIC DATA

  const data = React.useMemo(
    () => [
      {
        vendorEmail: "umersirrrrr@mail.com",
        vendorFirstName: "Umer",
        vendorLastName: "Nasir",
        active: "Yes",
      },
      {
        vendorEmail: "talalabbas@mail.com",
        vendorFirstName: "Talal",
        vendorLastName: "Abbas",
        active: "Yes",
      },
      {
        vendorEmail: "mshoaib@mail.com",
        vendorFirstName: "Muhammad",
        vendorLastName: "Shoaib",
        active: "No",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "vendorEmail",
        Filter: ColumnFilter,
      },
      {
        Header: "First Name",
        accessor: "vendorFirstName",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        accessor: "vendorLastName",
        Filter: ColumnFilter,
      },
      {
        Header: "Active",
        accessor: "active",
        Filter: ColumnFilter,
      },
    ],
    []
  );

  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ base: 4, md: 16 }}>
        <SimpleGrid columns={2}>
          <Box boxShadow="sm" p={4} mx={2}>
            <Text fontSize={18} fontWeight="bold">
              Vendors Table
            </Text>
            <Box my={2} />
            <VendorTable colorScheme="facebook" data={data} columns={columns} />
          </Box>

          <Box boxShadow="sm" p={4} mx={2}>
            <Text fontSize={18} fontWeight="bold">
              Users Table
            </Text>
            <Box my={2} />
            <VendorTable
              colorScheme="facebook"
              size="md"
              data={data}
              columns={columns}
            />
          </Box>
        </SimpleGrid>

        {/* <Box my={4} w="full" bg="brand.600" height="2px" borderRadius={16} /> */}

        <Box my={4} p={4} mx={2}>
          <Text fontSize={18} fontWeight="bold">
            Venues Table
          </Text>
          <VendorTable
            colorScheme="facebook"
            size="md"
            data={data}
            columns={columns}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
