import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./containers/Home";
import Search from "./containers/Search";
import VendorDashboard from "./containers/VendorDashboard";
import VenueDetails from "./containers/VenueDetails";

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
        <Route exact path="/vendorDashboard/" component={VendorDashboard} />
      </Switch>
    </Flex>
  );
};

export default App;
