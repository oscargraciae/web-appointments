import React, { useContext } from 'react'
import { SimpleGrid, Box, Heading, Text, Flex, Button, Spacer } from '@chakra-ui/react';
import { IService } from '../../types/IService';
import { minutesToHour } from '../../utils/formatTime';
import { BookingContext } from '../../context/bookingContext';

interface BusinessServicesProps {
  businessServices: IService[]
}

export const BusinessServices: React.FC<BusinessServicesProps> = ({ businessServices }) => {
  
  const { setServices, setTotalTime, totalTime, services } = useContext(BookingContext);

  const handleSelectService = (item: IService, index :number) => {
    let servicesTmp = [...services];
    servicesTmp = [...services, item];
    setServices(servicesTmp)
    
    const totalT = servicesTmp.reduce((total :number, service :any) => total + service.time, 0)
    
    setTotalTime(totalT);
  }

  return (
    <Box>
      <Heading as="h2" fontSize="24px" mb={6}>Servicios</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      { businessServices.map((item :IService, index :number) => (
        <Box px={5} py={4} borderWidth={1} borderColor='borders' borderRadius={3}>
          <Text noOfLines={2} fontWeight='bold' mb={2} h='48px'>{item.name}</Text>
          {/* <Text h='50px' noOfLines={2} fontSize='sm' color='subtext' mb={2}>{item.description}</Text> */}
          <Flex alignItems='flex-end'>
            <Text color='subtext' fontSize='sm' fontWeight='500' mr={4}>${item.price}MXN</Text>
            <Text color='subtext' fontSize='sm' fontWeight='500'>{ item.time ? minutesToHour(item.time) : 0}</Text>
            <Spacer />
            <Button variant='primary-outline' size='sm' onClick={() => handleSelectService(item, index)}>
              Reservar
            </Button>
          </Flex>
        </Box>
      )) }
    </SimpleGrid>
    </Box>
  );
}