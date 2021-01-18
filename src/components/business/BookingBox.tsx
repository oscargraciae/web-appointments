import React, { useContext } from 'react'
import { Box, Stack, Checkbox, Text, Flex, Spacer, Button } from '@chakra-ui/react';

// types
import { IBusiness } from '../../types/IBusiness';
import { IService } from '../../types/IService';
import { BookingContext } from '../../context/bookingContext';
import { formatTime } from '../../utils/formatTime';

interface BookingBoxProps {
  businessService: IService[]
  handleBooking: any
}

export const BookingBox: React.FC<BookingBoxProps> = ({ businessService, handleBooking }) => {
  const { setServices, services, setTotalTime, totalTime } = useContext(BookingContext);

  const onCheckboxChange = (e :any, item: IService, index :number) => {
    const { checked, name } = e.target;
    let servicesTmp = [...services];
    if (checked) {
      servicesTmp = [...services, item];
      setServices(servicesTmp)
    } else {
      const eIndex = services.indexOf(item)
      servicesTmp = [
        ...services.slice(0, eIndex),
        ...services.slice(eIndex + 1)
      ];
      setServices(servicesTmp)
    }

    
    // let totalTime = services.forEach(e => e.time + totalTime);
    
    // let initialValue = 0;
    // let objArray = [
    //     {x: 1},
    //     {x: 2},
    //     {x: 3},
    //     {x: 4},
    //     {x: 5},
    // ]
    // let sum = objArray.reduce(function (total, currentValue) {
    //     return total + currentValue.x;
    // }, initialValue);

    const totalT = servicesTmp.reduce((total :number, service :any) => total + service.time, 0)
    setTotalTime(totalT);
  }

  return (
    <>
      <Box mt={4} maxH='70%' w='100%' overflow='scroll' shadow="rgba(0, 0, 0, 0.12) 0px 6px 16px">
        <Stack mb={3} >
          { businessService.map((item: IService, index) => (
          <Stack isInline align='center' borderBottomWidth={1} borderColor='borders' key={item.id}>
            <Checkbox
              name={`service[${index}]`}
              onChange={val => onCheckboxChange(val, item, index)}
              colorScheme="green"
              borderColor='#DDD'
              w='100%'
              size='lg'
              px={6}
              py={4}
              display='flex'
              alignItems='center'
              _hover={{ bg: 'primaryLight' }}
            >
              <Flex align='center' justify='space-evenly' flex='100%'>
                <Text fontSize='md' fontWeight='semibold' w='260px'>{item.name}</Text>
                <Spacer />
                
                <Flex alignSelf='center'>
                  <Box w='20px' />
                  <Text fontSize='sm' pr='10px'>${item.price}MXN</Text>
                </Flex>
              </Flex>
            </Checkbox>
          </Stack>
          )) }
        </Stack>
        <Button
          onClick={handleBooking}
          variant='primary'
          isFullWidth
          size='lg'
          isDisabled={services.length === 0}
        >
          Reservar
          {/* <Text pl={2} fontSize='xs'>{ formatTime(totalTime) }min</Text> */}
        </Button>
      </Box>
    </>
  );
}