import React, { useContext, useState, useEffect } from 'react'
import { Box, Button, Flex, position, SimpleGrid, Text, Tooltip, useToast } from '@chakra-ui/react';
import moment from 'moment';

import { BookingContext } from '../../context/bookingContext';
import { IHour } from '../../types/IHour';
import { minutesToHour } from '../../utils/formatTime';
import { BusinessService } from '../../services/businessService';
import { IBusiness } from '../../types/IBusiness';
import { IBooking } from '../../types/IBooking';
import { LoadingView } from '../general/LoadingView';
import { formatTime, formatTimeAdd } from '../../utils/formatDate';

interface CaledarTimeProps {
  hours: IHour[]
  business: IBusiness
}

export const CalendarTime: React.FC<CaledarTimeProps> = ({ hours, business }) => {
  // context
  const { date, totalTime, setTime, time } = useContext(BookingContext);

  const toast = useToast();

  const numElements = totalTime / 15;

  // states
  const [hoursState, setHoursState] = useState<any>([]);
  const [highlightDate, setHighlightDate] = useState<number[]>([]);
  const [servicesSelected, setServicesSelected] = useState<number[]>([]);
  const [bookings, setBookings] = useState<any>(null);

  const daySelected = hours.filter(e => e.dayOfWeek === new Date(date).getDay())[0];

  useEffect(() => {
    const fetchTime = async () => {
      if (business.id) {
        const startTime = new Date(`${moment(date).format('YYYY-MM-DD')} 00:00:00`).toISOString();
        const endTime = moment(new Date(`${moment(date).format('YYYY-MM-DD')} 00:00:00`)).add(1, 'day').toISOString();
        const response = await new BusinessService().getTime(business.id, { startTime, endTime });
        setBookings(response.bookings);
        console.log('tiempo', response);

      }
    }
    if (!business.hasParallelBookings) {
      fetchTime();
    } else {
      setBookings([]);
    }
  }, [])

  useEffect(() => {
    if (bookings) {
      getHours();
    }
  }, [bookings])

  useEffect(() => {
    if (hoursState.length > 0) {
      const indexSelected = hoursState.indexOf(time);
      if (indexSelected >= 0)  {
        let nums = [];
        for (let x = indexSelected; x < (indexSelected + numElements); x++) {
          nums.push(x)
        }
        setServicesSelected(nums);
        setServicesSelected([indexSelected]);
      } 
    }
  }, [time, hoursState]);

  const getHours = () => {
    const timeFrom = moment(daySelected.openFrom, [moment.ISO_8601, 'HH:mm']).hour();
    const timeTill = moment(daySelected.openTill, [moment.ISO_8601, 'HH:mm']).hour();
    var arr = [], i, j;
    if (bookings) {
      for( i = timeFrom; i < timeTill; i++) {
        for( j = 0; j < 4; j++) {
          const time = i + ":" + (j===0 ? "00" : 15*j);
          
          const booking = bookings.filter((item :IBooking) => {
            const startTime = moment(item.bookingDate, [moment.ISO_8601, 'HH:mm']).format('HH:mm');
            const endTime = moment(item.bookingDate, [moment.ISO_8601, 'HH:mm']).add(item.totalTime, 'minutes') .format('HH:mm');
            return time >= startTime && time < endTime;
          });

          if (booking.length > 0) {
            arr.push({ time, available: false });
          } else {
            arr.push({ time, available: true });
          }
          
        }
      }
    }
    
    setHoursState(arr);
  }

  const handleHover = (index :number) => {
    let nums = [];
    for (let x = index; x < (index + numElements); x++) {
      nums.push(x)
    }
    
    setHighlightDate([index, ...nums]);
    // setHighlightDate([index]);
  }

  const isHover = (index :number) => {
    const isActive = highlightDate.filter(e => e === index)[0];
    return isActive !== undefined;
  }

  const isActive = (index :number) => {
    const isActive = servicesSelected.filter(e => e === index)[0];
    return isActive !== undefined;
  }

  const handleSelectedTime = (item :string, index :number) => {
    const isAvailable = hoursState[index + (numElements - 1)]
    console.log('hoursState', isAvailable);
    

    if (isAvailable && isAvailable.available) {
      // setSelectedTime(item);
      setTime(item);
      let nums = [];
      for (let x = index; x < (index + numElements); x++) {
        nums.push(x)
      }
      setServicesSelected(nums);
      
      // setServicesSelected([index]);
    } else {
      console.log('NO DISPONIBLE');
      toast({
        status: 'warning',
        title: 'Horario no disponible.',
        description: `Verifica que no haya horarios ocupados entre la hora que seleccionaste.`,
        position: 'top',
      })
    }
    
  }


  if (hoursState.length === 0) return (
    <Flex alignItems='center' justify='center' direction='column' w='100%' h='200px'>
      <LoadingView />
    </Flex>
  );

  return (
    <Flex alignItems='center' justify='center' direction='column' w='100%'>
      <Text fontSize='lg' fontWeight='bold' py={2}>Selecciona la hora</Text>
      <Text fontSize='xs' color='subtext' mb={1}>Tiempo de servicio {minutesToHour(totalTime)}</Text>
      { time &&
        <Text fontSize='xs' color='subtext' mb={2}>Horario de servicio {formatTime(time)} - {formatTimeAdd(time, totalTime)}</Text>
      }
      <SimpleGrid columns={4} spacing={1} w='100%'>
        { hoursState.map((item :any, index :number) => {
          if (item.available) {
            return (
              <Box
                key={index}
                p={2}
                textAlign='center'
                borderWidth={1}
                borderColor='borders'
                cursor='pointer'
                onClick={() => handleSelectedTime(item.time, index)}
                onMouseEnter={(e) => handleHover(index)}
                _hover={{ bg: '#E9F9EF', opacity: 1 }}
                className={`${isHover(index) ? 'service-selected' : ''} ${isActive(index) ? 'service-active' : ''}`}
              >
                <Text>{item.time}</Text>
              </Box>
            )
          } else {
            return (
              <Tooltip label="Reservada" aria-label="Reservada">
              <Box
                key={index}
                p={2}
                textAlign='center'
                borderWidth={1}
                borderColor='borders'
                cursor='pointer'
                bg='gray.300'
                backgroundImage='repeating-linear-gradient(60deg,transparent,transparent 2px,#eee 0,#eee 7px)'
                onMouseEnter={(e) => handleHover(index)}
                className={`${isHover(index) ? 'service-selected' : ''} ${isActive(index) ? 'service-active' : ''}`}
              >
                <Text>{item.time}</Text>
              </Box>
              </Tooltip>
            )
          }
        }) 
       }
      </SimpleGrid>
      <style>{`
        .data-class:nth-child(5) ~ .data-class.apple ~ .data-class.apple {
          background-color: #0ea;
        }

        .service-selected {
          /* background-color: #3722d3; */
          background-color: #E9F9EF;
          border-color: #25CB67;
          opacity: 0.6;
          
        }

        .service-active {
          /* background-color: #020621 !important; */
          background-color: #25CB67;
          color: #FFF;
        }

        .service:hover ~ .service:nth-child(1) {
          background-color: red;
        }
      `}</style>
    </Flex>
  );
}