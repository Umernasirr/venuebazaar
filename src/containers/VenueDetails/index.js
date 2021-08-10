import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import SectionCarousel from "../../components/SectionCarousel";
import ItemDetails from "./ItemDetails";
import MyCalendar from "../../components/MyCalendar";
import { service } from "../../services/services";
const VenueDetails = ({ match }) => {
  const { id } = match.params;
  const [venue, setVenue] = useState({});

  useEffect(() => {
    getVenueDetails();
  }, []);

  const getVenueDetails = () => {
    service
      .getVenue(id)
      .then(({ data }) => {
        if (data.success) {
          console.log(data, "datatat");
          setVenue(data.data);
        } else {
          console.log(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex w="full" h="full" direction="column">
      <SectionCarousel />
      <Box my={4} />
      {venue && venue._id && (
        <Box mx={{ base: 4, md: 16 }}>
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <ItemDetails selectedItem={venue} />

            <Flex align="center" justify="center" p={4}>
              <MyCalendar venue={venue} />
            </Flex>
          </SimpleGrid>
        </Box>
      )}

      <Box my={4} />

      <Footer />
    </Flex>
  );
};

export default VenueDetails;
