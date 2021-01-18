import { Box, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'

import { BusinessItem } from './BusinessItem'
import { IBusiness } from '../../types/IBusiness';
import { ExploreContext } from '../../context/exploreContext';
import { LoadingView } from '../general/LoadingView';

interface BusinessListProps {
  // businesses: IBusiness[]
}

const BusinessList: React.FC<BusinessListProps> = ({  }) => {
  const { businesses, isLoading } = useContext(ExploreContext);
  console.log('businesses liosta', businesses);
  
  
  if(isLoading) {
    return <LoadingView />
  }

  if (!businesses || businesses.length === 0) {
    return (
      <Box py={4}>
        <Text>No hay resultados</Text>
      </Box>
    )
  }

  return (
    <Box py={4}>
      {/* <Text>Coordenadas de busqueda: {coords?.lat} | {coords?.lng}</Text> */}
      { businesses.map((business : IBusiness) => (
        <BusinessItem key={business.id} business={business} />
      )) }
      {/* { businesses.map((business) => (
        <BusinessItem key={business.id} business={business} />
      )) }
      { businesses.map((business) => (
        <BusinessItem key={business.id} business={business} />
      )) }
      { businesses.map((business) => (
        <BusinessItem key={business.id} business={business} />
      )) } */}
      
    </Box>
  );
}

export default BusinessList;