import { Box, Flex, SimpleGrid, Text, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import VendorTable from "./VendorTable";
import ColumnFilter from "./ColumnFilter";
import { service } from "../../services/services";

import DatePicker from "react-datepicker";

const AdminDashboard = () => {
  const [vendors, setVendors] = useState([]);
  const [users, setUsers] = useState([]);
  const [venues, setVenues] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getVenues = async () => {
      const res = await service.getVenuesAdmin();

      setVenues(res.data.data);

      console.log(res.data.data[0]);
    };

    const getUsers = async () => {
      const res = await service.getUsers();

      const tempUsers = [];
      const tempVendors = [];

      res.data.data.forEach((user) => {
        if (user.role === "user") {
          tempUsers.push(user);
        } else if (user.role === "vendor") {
          tempVendors.push(user);
        }
      });

      setUsers(tempUsers);
      setVendors(tempVendors);

      setLoading(false);
    };

    if (loading) {
      getUsers();
      getVenues();
    }
  }, []);

  const handleUserChangeActive = (rowId, value) => {
    console.log(rowId, value);
    console.log(users[rowId]);
  };

  const handleVendorChangeActive = (rowId, value) => {
    console.log(rowId, value);
    console.log(vendors[rowId]);
  };
  const handleDateChange = (rowId, date) => {
    console.log(rowId, date);
  };

  const columnUsers = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "First Name",
        accessor: "firstName",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        Filter: ColumnFilter,
      },
      {
        Header: "Active",
        accessor: "active",
        Filter: ColumnFilter,

        Cell: (props) => {
          return (
            <Select
              defaultValue={
                users[props.row.id]?.accountActive ? "active" : "disabled"
              }
              onChange={(e) => {
                handleUserChangeActive(props.row.id, e.target.value);
              }}
            >
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </Select>
          );
        },
      },
    ],
    [loading]
  );

  const columnVendors = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "First Name",
        accessor: "firstName",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        Filter: ColumnFilter,
      },
      {
        Header: "Active",
        accessor: "active",
        Filter: ColumnFilter,

        Cell: (props) => {
          return (
            <Select
              defaultValue={
                vendors[props.row.id]?.accountActive ? "active" : "disabled"
              }
              onChange={(e) => {
                handleVendorChangeActive(props.row.id, e.target.value);
              }}
            >
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </Select>
          );
        },
      },
    ],
    [loading]
  );

  const venueColumns = React.useMemo(
    () => [
      {
        Header: "Venue",
        accessor: "venueDescription",
        Filter: ColumnFilter,
      },
      {
        Header: "Address",
        accessor: "venueAddress",
        Filter: ColumnFilter,
      },
      {
        Header: "City",
        accessor: "venueCity",
        Filter: ColumnFilter,
      },

      {
        Header: "From Active Date",
        accessor: "fromActiveDate",
        Filter: ColumnFilter,

        Cell: (props) => {
          const fromActiveDate = venues[props.row.id]?.fromActiveDate
            ? new Date(venues[props.row.id]?.fromActiveDate)
            : new Date();

          return (
            <DatePicker
              selected={fromActiveDate}
              onChange={(date) => console.log(date)}
            />
          );
        },
      },

      {
        Header: "To Active Date",
        accessor: "toActiveDate",
        Filter: ColumnFilter,

        Cell: (props) => {
          const toActiveDate = venues[props.row.id]?.toActiveDate
            ? new Date(venues[props.row.id]?.toActiveDate)
            : new Date();

          return (
            <DatePicker
              selected={toActiveDate}
              onChange={(date) => handleDateChange(props.row.id, date)}
            />
          );
        },
      },
    ],
    [loading]
  );

  return (
    <Flex w="full" h="full" direction="column">
      <Box my={4} />

      <Box mx={{ base: 4, md: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Box boxShadow="sm" p={4} mx={2}>
            <Text fontSize={18} fontWeight="bold">
              Vendors Table
            </Text>
            <Box my={2} />
            {!loading && (
              <VendorTable
                colorScheme="facebook"
                data={users}
                columns={columnUsers}
              />
            )}
          </Box>

          <Box boxShadow="sm" p={4} mx={2}>
            <Text fontSize={18} fontWeight="bold">
              Users Table
            </Text>
            <Box my={2} />
            {!loading && users.length > 0 && (
              <VendorTable
                colorScheme="facebook"
                size="md"
                data={vendors}
                columns={columnVendors}
              />
            )}
          </Box>
        </SimpleGrid>

        {/* <Box my={4} w="full" bg="brand.600" height="2px" borderRadius={16} /> */}

        <Box my={4} p={4} mx={2}>
          <Text fontSize={18} fontWeight="bold">
            Venues Table
          </Text>

          {!loading && (
            <VendorTable
              colorScheme="facebook"
              size="md"
              data={venues}
              columns={venueColumns}
            />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
