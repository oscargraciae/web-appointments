import React, { useEffect, useContext } from 'react'
import { Box, Text } from '@chakra-ui/react';
import { IBusiness } from '../../types/IBusiness';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';
import { ExploreContext } from '../../context/exploreContext';

interface ExploreMapProps {}

export const ExploreMap: React.FC<ExploreMapProps> = ({}) => {
  const { businesses, coords, setCoords, centerMapCoords, setZoom, itemSelected } = useContext(ExploreContext);
  console.log('Coords explore map', coords);
  
  const { refContainer, addMarker, changeLocation, handleIconMarket } = useGoogleMaps({ coords, setCoords, setZoom });
  

  useEffect(() => {
    businesses.map((business : IBusiness) => {
      addMarker(business.businessAddress, business.id);
    })
  }, [businesses]);

  useEffect(() => {
    changeLocation(centerMapCoords);
  }, [centerMapCoords])
  
  useEffect(() => {
    handleIconMarket(itemSelected, true);

    return () => handleIconMarket(itemSelected, false);
  }, [itemSelected]);

  return (
    // <Box h='100vh' w='100%' pos='sticky' top='0px' right='0px' mt='-60px' pt='60px' >
    <Box h='100vh' w='100%' pos='sticky' top='0px' right='0px' >
      <Box ref={refContainer} h='100%' w='100%' />
      <Box bg='surface' px={2} py={1} zIndex={4} pos='absolute' top='80px' right='20px' boxShadow='rgba(0, 0, 0, 0.12) 0px 6px 16px !important'>
        <Text fontSize='sm' fontWeight='600'>Desplaza el mapa para buscar en otra zona</Text>
      </Box>
    </Box>
  );
}