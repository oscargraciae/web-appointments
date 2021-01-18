import React, { useEffect, useContext } from 'react'
import { Box } from '@chakra-ui/react';
import { IBusiness } from '../../types/IBusiness';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';
import { ExploreContext } from '../../context/exploreContext';

interface ExploreMapProps {}

export const ExploreMap: React.FC<ExploreMapProps> = ({}) => {
  const { businesses, coords, setCoords, centerMapCoords } = useContext(ExploreContext);
  const { refContainer, addMarker, changeLocation } = useGoogleMaps({ coords, setCoords });
  

  useEffect(() => {
    businesses.map((business : IBusiness) => {
      addMarker(business.businessAddress);
    })
  }, [businesses]);

  useEffect(() => {
    changeLocation(centerMapCoords);
  }, [centerMapCoords])

  return (
    <Box h='100vh' w='100%' pos='sticky' top='0px' right='0px' mt='-60px' pt='60px' >
      <Box ref={refContainer} h='100%' w='100%' />
    </Box>
  );
}