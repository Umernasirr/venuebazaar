import { Flex } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./containers/Home";
import Search from "./containers/Search";
import VendorAddVenue from "./containers/VendorAddVenue";
import VendorDashboard from "./containers/VendorDashboard";
import VenueDetails from "./containers/VenueDetails";
import AdminDashboard from "./containers/AdminDashboard";
import { service } from "./services/services";
import { useHistory } from "react-router-dom";
import { setVenues } from "./redux/venue";
import { setUser } from "./redux/user";
import { Store } from "./services/store";
//
const App = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    try {
      if (JSON.parse(Store.getUser())) {
        dispatch(setUser(JSON.parse(Store.getUser())));
      }
    } catch (error) {
      // history.pus
    }

    service
      .getVenues()
      .then(({ data }) => {
        if (data.success) {
          dispatch(setVenues({ venues: data.data }));
        } else {
          console.log(data.error, "error");
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex h="100vh" w="100vw" direction="column" overflowX="hidden">
      <Header
        isJoinOpen={isJoinOpen}
        setIsJoinOpen={setIsJoinOpen}
        role={role}
      />
      <SubHeader setIsJoinOpen={setIsJoinOpen} setRole={setRole} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/venueDetails/:id" component={VenueDetails} />
        <Route exact path="/vendorDashboard" component={VendorDashboard} />
        <Route exact path="/vendorAddVenue" component={VendorAddVenue} />
        <Route exact path="/vendorEditVenue/:id" component={VendorAddVenue} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
      </Switch>
    </Flex>
  );
};

export default App;
