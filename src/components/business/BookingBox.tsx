import React, { useContext } from 'react'
import { Box, Stack, Checkbox, Text, Flex, Spacer, Button, VStack, IconButton, Tooltip } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai'

// types
import { IBusiness } from '../../types/IBusiness';
import { IService } from '../../types/IService';
import { BookingContext } from '../../context/bookingContext';
import { formatTime } from '../../utils/formatTime';

interface BookingBoxProps {
  handleBooking: any
}

export const BookingBox: React.FC<BookingBoxProps> = ({ handleBooking }) => {
  const { setServices, services, setTotalTime, totalTime } = useContext(BookingContext);
  console.log('Servicios en store4', services);
  

  const deleteService = (index :number) => {
    setServices([
      ...services.slice(0, index),
      ...services.slice(index + 1)
    ])
  }

  return (
    <>
      <Box>
        <Box mt={4} w='100%' maxHeight='330px' overflow='scroll' shadow="rgba(0, 0, 0, 0.12) 0px 6px 16px">
          <Stack mb={3} >
            { services.map((item: IService, index :number) => (
            <Stack isInline align='center' borderBottomWidth={1} borderColor='borders' key={index} px={4} py={3}>
              <Flex align='center' justify='space-evenly' flex='100%'>
                <Text fontSize='md' fontWeight='semibold' noOfLines={2} pr={2} >{item.name}</Text>
                <Spacer />
                
                <Flex alignSelf='center'>
                  <Flex direction='column'>
                    <Text fontSize='xs' pr='10px'>${item.price}MXN</Text>
                    <Text fontSize='xs' pr='10px'> {item.time}min</Text>
                  </Flex>
                </Flex>
                <IconButton aria-label='Eliminar' icon={<AiOutlineClose />} variant='ghost' onClick={() => deleteService(index)} />
              </Flex>
            </Stack>
            )) }
          </Stack>
        </Box>
        <Tooltip label='Selecciona un servicio para reservar' isDisabled>
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
        </Tooltip>
      </Box>
    </>
  );
}