import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";

const App = () => {
  return (
    <Flex h="100vh" w="100vw" direction="column">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Flex>
  );
};

export default App;
