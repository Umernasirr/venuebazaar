import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./containers/Home";
import Search from "./containers/Search";

//
const App = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [role, setRole] = useState("");

  return (
    <Flex h="100vh" w="100vw" direction="column">
      <Header
        isJoinOpen={isJoinOpen}
        setIsJoinOpen={setIsJoinOpen}
        role={role}
      />
      <SubHeader setIsJoinOpen={setIsJoinOpen} setRole={setRole} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Flex>
  );
};

export default App;
