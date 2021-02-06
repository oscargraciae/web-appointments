import React, { useContext, useState } from 'react'
import { Box, Button } from '@chakra-ui/react';
import { BookingBox } from './BookingBox';
import { BookingContext } from '../../context/bookingContext';

interface BookingBoxMobileProps {
  handleBooking: any
}

export const BookingBoxMobile: React.FC<BookingBoxMobileProps> = ({ handleBooking }) => {
  const { setServices, services, setTotalTime, totalTime } = useContext(BookingContext);

  const [showServices, setShowServices] = useState(false)

  return (
    <Box display={{ base: services.length > 0 ? 'block' : 'none', md: 'none' }} bg='#FFF' pos='fixed' bottom='0px' p={4}  w='100%' boxShadow='10px -4px 8px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
      <Box top='70px' right='0px' display={{ base: showServices ? 'block' : 'none', md: 'none' }}>
        <BookingBox handleBooking={handleBooking} />
      </Box>
      <Button isFullWidth variant={showServices ? 'gray' : 'primary'} mt={1} onClick={() => setShowServices(!showServices)}>
        { !showServices ? `Ver servicios para reservar (${services.length})` : 'Ocultar' }
      </Button>
    </Box>
  );
}