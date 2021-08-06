import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./containers/Home";
import Search from "./containers/Search";
import VendorAddVenue from "./containers/VendorAddVenue";
import VendorDashboard from "./containers/VendorDashboard";
import VenueDetails from "./containers/VenueDetails";
import VendorEditVenue from "./containers/VendorEditVenue";
import AdminDashboard from "./containers/AdminDashboard";
//
const App = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [role, setRole] = useState("");

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
        <Route exact path="/vendorEditVenue/:id" component={VendorEditVenue} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
      </Switch>
    </Flex>
  );
};

export default App;
