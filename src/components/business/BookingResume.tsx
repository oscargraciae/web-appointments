import React, { useContext } from 'react'
import { Box, Divider, Flex, Text, Textarea } from '@chakra-ui/react';
import { BookingContext } from '../../context/bookingContext';
import { formatDate } from '../../utils/formatDate';
import { TextareaField } from '../general/InputField';
import { minutesToHour } from '../../utils/formatTime';
import { IService } from '../../types/IService';

interface BookingResumeProps {}

/*
  Nombre del negocio
  Dirección
  Telefono

  Hora - 
  Fecha - 23 de diciembre 2021

  Servicios
    - Corte para hombre 15min $59
    - Corte para dama 30min $59

  Mensaje

  Confirmación-
*/

export const BookingResume: React.FC<BookingResumeProps> = ({}) => {

  const { date, time, services, totalTime, setMessage, message } = useContext(BookingContext);

  return (
    <Flex alignItems='center' justify='center' flex={1} direction='column'>
      <Text fontSize='lg' fontWeight='bold' py={2}>Confirmación</Text>

      <Box w='100%'>
        <Text fontSize='lg' fontWeight='bold' mb={3}>Día y hora</Text>
        <Flex justify='space-between' mb={1}>
          <Text fontWeight='semibold'>Fecha </Text>
          <Text>{formatDate(date)}</Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontWeight='semibold'>Hora </Text>
          <Text>{time}</Text>
        </Flex>
        <Divider my={6} bg='tomato' />
        <Text fontSize='lg' fontWeight='bold' mb={3}>Servicios</Text>
        { services.map((service :IService) => (
          <Flex justify='space-between'>
            <Text fontWeight='semibold' fontSize='sm'>{service.name}</Text>
            <Text fontSize='sm'>{service.time ? minutesToHour(service.time) : 0} / ${service.price}MXN</Text>
          </Flex>
        )) }
        <Flex justify='flex-end' alignItems='flex-end'>
          <Text fontWeight='semibold' fontSize='sm' my={3} textAlign='right'>Aproximado total: {minutesToHour(totalTime)} </Text>
        </Flex>
        {/* <Text fontSize='sm' fontStyle='gray' fontWeight='500' textStyle='italic' >Recuerda que el pago se hace en el establecimiento.</Text> */}
        <Divider my={6} bg='tomato' />
        

        <Box>
          <Text fontSize='lg' fontWeight='bold' mb={3}>Comentarios</Text>
          <Textarea
            variant='app'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
      </Box>
    </Flex>
  );
}