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
  
  if(isLoading) {
    return <LoadingView />
  }

  if (!businesses || businesses.length === 0) {
    return (
      <Box py={4} px={4} textAlign='center'>
        <Text fontSize='lg' fontWeight='bold'>No hay negocios en esta zona.</Text>
        <Text fontSize='sm'>Lo sentimos, estamos trabajando para traer más negocios.</Text>
      </Box>
    )
  }

  return (
    <Box py={4} minH='100vh' bg='surface' mt={3}>
      { businesses.map((business : IBusiness) => (
        <BusinessItem key={business.id} business={business} />
      )) }      
    </Box>
  );
}

export default BusinessList;