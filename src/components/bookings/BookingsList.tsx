import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import moment from 'moment';

import { IBooking } from '../../types/IBooking';
import { formatDate } from '../../utils/formatDate';
import { minutesToHour } from '../../utils/formatTime';
import { BookingService } from '../../services/bookingService';
import { LoadingView } from '../general/LoadingView';

export const BookingsList: React.FC<{ tab: number }> = ({ tab }) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchBookings = async () => {
      let params = {};
      if (tab === 1) {
        params = { endDate: moment(new Date()).toISOString() };
      } else {
        params = { startDate: moment(new Date()).toISOString() };
      }

      const { bookings } = await new BookingService().getAll(params);
      console.log('bookings', bookings);
      
      setBookings(bookings);
      setIsLoading(false);
    }
    fetchBookings();
  }, []);

  if (isLoading) {
    return <LoadingView />
  }

  return (
    <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Negocio</Th>
            <Th>Fecha de servicio</Th>
            <Th>Tiempo de servicio*</Th>
            <Th>Costo</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          { bookings.map((item: IBooking) => (
            <Tr fontSize='14px'>
              <Td>{item.business?.name}</Td>
              <Td>{item.bookingDate ? formatDate(item.bookingDate) : ''}</Td>
              <Td>{item.totalTime ? minutesToHour(item.totalTime) : ''}</Td>
              <Td>${item.totalPrice}MXN</Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
  );
}