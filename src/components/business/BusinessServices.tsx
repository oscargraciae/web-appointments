import React, { useContext } from 'react'
import { SimpleGrid, Box, Heading, Text, Flex, Button, Spacer } from '@chakra-ui/react';
import { IService } from '../../types/IService';
import { TiPlus } from 'react-icons/ti';

import { minutesToHour } from '../../utils/formatTime';
import { BookingContext } from '../../context/bookingContext';

interface BusinessServicesProps {
  businessServices: IService[]
}

export const BusinessServices: React.FC<BusinessServicesProps> = ({ businessServices }) => {
  
  const { setServices, setTotalTime, setTotalPrice, services } = useContext(BookingContext);

  const handleSelectService = (item: IService, index :number) => {
    let servicesTmp = [...services];
    servicesTmp = [...services, item];
    setServices(servicesTmp)
    
    const totalT = servicesTmp.reduce((total :number, service :any) => total + service.time, 0)
    const totalPrice = servicesTmp.reduce((total :number, service :any) => total +  parseInt(service.price), 0)
    
    setTotalTime(totalT);
    setTotalPrice(totalPrice);
  }

  return (
    <Box>
      <Heading as="h2" fontSize="24px" mb={6}>Servicios</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      { businessServices.map((item :IService, index :number) => (
        <Box px={3} py={3} borderWidth={1} borderColor='borders' borderRadius={3} bg='surface'>
          {/* <Text h='50px' noOfLines={2} fontSize='sm' color='subtext' mb={2}>{item.description}</Text> */}
          <Flex alignItems='flex-start' justifyContent='flex-start'>
            <Text noOfLines={2} fontSize='sm' fontWeight='bold' w='210px' pr={3}>{item.name}</Text>
            <Box>
              <Text color='subtext' fontSize='sm' fontWeight='600'>${item.price}</Text>
              <Text color='subtext' fontSize='xs' fontWeight='500'>{ item.time ? minutesToHour(item.time) : 0}</Text>
            </Box>
            
            <Spacer />
            <Button variant='accent-outline' size='sm' onClick={() => handleSelectService(item, index)}>
              <TiPlus />
            </Button>
          </Flex>
        </Box>
      )) }
    </SimpleGrid>
    </Box>
  );
}