import React, { useContext } from 'react'
import { Flex, Text } from '@chakra-ui/react';
import moment from 'moment';

import DatePicker, { registerLocale } from "react-datepicker";
import * as es from "date-fns/locale/es/index";
import 'moment/locale/es-mx';

import { BookingContext } from '../../context/bookingContext';

moment.locale('es-mx');

interface CalendarDateProps {
  hours: any
}

export const CalendarDate: React.FC<CalendarDateProps> = ({ hours }) => {
  // hooks
  const { date, setDate, setStep, setTime } = useContext(BookingContext);
  
  es.default.options = { weekStartsOn: 1 }
  registerLocale("es", es);

  const isWeekday = (date:any) => {
    const day = new Date(date).getDay();
    return hours[day].isOpen;
  };

  const onChangeDate = (date :any) => {
    setDate(date);
    setTime('');
  }
  
  return (
    <Flex alignItems='center' justify='center' flex={1} direction='column'>
      <Text fontSize='lg' fontWeight='bold' py={2}>Selecciona el día</Text>
      <DatePicker
        selected={date}
        onChange={date => onChangeDate(date)} 
        inline
        minDate={new Date()}
        locale={es}
        filterDate={isWeekday}
      />
    </Flex>
  );
}