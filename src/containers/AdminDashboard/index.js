import { Box, Flex, SimpleGrid, Text, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import VendorTable from "./VendorTable";
import ColumnFilter from "./ColumnFilter";
import { service } from "../../services/services";
import Page from "react-page-loading";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";

import { useHistory } from "react-router";

import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

const AdminDashboard = () => {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  const [vendors, setVendors] = useState([]);
  const [users, setUsers] = useState([]);
  const [venues, setVenues] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    // Check if user aint admin
    if (!currentUser) {
      history.push("/");
    }
    if (currentUser && currentUser.role !== "admin") {
      // history.push("/");
      // UNCOMMENT THIS TALALA TO ONLY LET ROLE ADMIN GO HERE
      if (currentUser.role === "vendor") {
        history.push("/vendorDashboard");
      } else {
        history.push("/");
      }
    }

    const getVenues = async () => {
      setLoading(true);

      const res = await service.getVenuesAdmin();

      setVenues(res.data.data);

      setLoading(false);
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
  }, [currentUser]);

  const handleUserChangeActive = async (rowId, value) => {
    if (users[rowId]) {
      const id = users[rowId]._id;
      let accountActive;
      if (value === "active") {
        accountActive = false;
      } else {
        accountActive = true;
      }
      const postObj = {
        accountActive: accountActive,
      };
      await service.setAccountAvailability(id, postObj);
    }
  };

  const handleVendorChangeActive = async (rowId, value) => {
    if (vendors[rowId]) {
      const id = vendors[rowId]._id;

      let accountActive;
      if (value === "active") {
        accountActive = false;
      } else {
        accountActive = true;
      }
      const postObj = {
        accountActive: accountActive,
      };
      await service.setAccountAvailability(id, postObj);
    }
  };

  const handleToDateChange = async (rowIdx, date) => {
    setLoading2(true);
    const postObj = {
      toActiveDate: date,
      fromActiveDate: venues[rowIdx].fromActiveDate,
    };

    const data = await service.setVenueDates(venues[rowIdx]._id, postObj);

    if (data.data.success) {
      const tempVenues = venues.map((venue, idx) => {
        if (idx.toString() === rowIdx.toString()) {
          venue.toActiveDate = date;
        }

        return venue;
      });

      setVenues(tempVenues);
      setLoading2(false);
    }
  };

  const handleFromDateChange = async (rowIdx, date) => {
    setLoading2(true);
    const postObj = {
      toActiveDate: venues[rowIdx].toActiveDate,
      fromActiveDate: date,
    };

    const data = await service.setVenueDates(venues[rowIdx]._id, postObj);
    if (data.data.success) {
      const tempVenues = venues.map((venue, idx) => {
        if (idx.toString() === rowIdx.toString()) {
          venue.fromActiveDate = date;
        }

        return venue;
      });

      setVenues(tempVenues);
      setLoading2(false);
    }
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
        accessor: "venueName",
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
            : null;

          return (
            <DatePicker
              selected={fromActiveDate}
              onChange={(date) => handleFromDateChange(props.row.id, date)}
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
            : null;

          return (
            <DatePicker
              selected={toActiveDate}
              name="Dasd"
              title="Dasd"
              placeholderText="Please select date"
              styles={{ backgroundColor: "red" }}
              onChange={(date) => handleToDateChange(props.row.id, date)}
            />
          );
        },
      },
    ],
    [loading2, venues]
  );

  return (
    <Flex w="full" h="full" direction="column">
      <Page loader={"bar"} color={"#E62878"} size={12}>
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
      </Page>
    </Flex>
  );
};

export default AdminDashboard;
