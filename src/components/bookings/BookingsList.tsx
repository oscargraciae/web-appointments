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
        params = { startDate: moment(new Date()).toISOString(), statuses: [2, 3] };
      }

      const { bookings } = await new BookingService().getAll(params);
      
      setBookings(bookings);
      setIsLoading(false);
    }
    fetchBookings();
  }, []);

  if (isLoading) {
    return <LoadingView />
  }

  const statusColor = (id?: number) : string => {
    if (!id) return 'primary';

    switch (id) {
      case 1:
        return 'yellow.500'
      case 2:
        return 'primary'
      case 3:
        return 'red.500'
      default:
        return 'primary'
    }
  }

  return (
    <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Negocio</Th>
            <Th>Fecha de servicio</Th>
            <Th>Tiempo de servicio*</Th>
            <Th>Costo</Th>
            <Th>Fecha de solicitud</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          { bookings.map((item: IBooking) => (
            <Tr fontSize='14px' key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.business?.name}</Td>
              <Td>{item.bookingDate ? formatDate(item.bookingDate) : ''}</Td>
              <Td>{item.totalTime ? minutesToHour(item.totalTime) : ''}</Td>
              <Td>${item.totalPrice}MXN</Td>
              <Td>{item.createdAt ? formatDate(item.createdAt) : ''}</Td>
              <Td color={statusColor(item.bookingStatus?.id)} fontWeight='bold'>{item.bookingStatus?.name}</Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
  );
}