import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import SectionCarousel from "../../components/SectionCarousel";
import ItemDetails from "./ItemDetails";
import MyCalendar from "../../components/MyCalendar";
import { service } from "../../services/services";
import Page from "react-page-loading";
const VenueDetails = ({ match }) => {
  const { id } = match.params;
  const [venue, setVenue] = useState({});
  const [available, setAvailable] = useState(true);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    getVenueDetails();
  }, []);

  const getVenueDetails = () => {
    service
      .getVenue(id)
      .then(({ data }) => {
        if (data.success) {
          console.log(data, "datatat");

          const now = new Date();

          if (
            new Date(data.data.fromActiveDate).getTime() <= now.getTime() &&
            new Date(data.data.toActiveDate).getTime() > now.getTime()
          ) {
            setAvailable(true);
          } else {
            setAvailable(false);
          }
          setVenue(data.data);
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex w="full" h="full" direction="column">
      <Page loader={"bar"} color={"#E62878"} size={12}>
        {currentUser && currentUser.role !== "vendor" && <SectionCarousel />}
        <Box my={4} />
        {venue && venue._id && (
          <Box mx={{ base: 4, md: 16 }}>
            <SimpleGrid columns={[1, 1, 2, 2]}>
              <ItemDetails selectedItem={venue} />

              <Flex align="center" justify="center" p={4}>
                {available ? (
                  <MyCalendar venue={venue} />
                ) : (
                  <Flex>
                    <Text
                      fontSize={32}
                      fontWeight="bold"
                      color="blackAlpha.600"
                    >
                      Venue is not available for booking...
                    </Text>
                  </Flex>
                )}
              </Flex>
            </SimpleGrid>
          </Box>
        )}

        <Box my={4} />

        <Footer />
      </Page>
    </Flex>
  );
};

export default VenueDetails;
