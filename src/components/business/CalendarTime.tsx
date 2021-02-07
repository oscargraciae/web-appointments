import React, { useContext, useState, useEffect } from 'react'
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import moment from 'moment';

import { BookingContext } from '../../context/bookingContext';
import { IHour } from '../../types/IHour';
import { minutesToHour } from '../../utils/formatTime';

interface CaledarTimeProps {
  hours: IHour[]
}

export const CalendarTime: React.FC<CaledarTimeProps> = ({ hours }) => {
  // context
  const { date, totalTime, setTime, time } = useContext(BookingContext);

  const numElements = totalTime / 15;

  // states
  const [hoursState, setHoursState] = useState<any>([]);
  const [highlightDate, setHighlightDate] = useState<number[]>([]);
  const [servicesSelected, setServicesSelected] = useState<number[]>([]);

  const daySelected = hours.filter(e => e.dayOfWeek === new Date(date).getDay())[0];

  // const [selectedTime, setSelectedTime] = useState('');
  
  useEffect(() => {
    getHours();
  }, [])

  useEffect(() => {
    console.log('use effect');;
    
    if (hoursState.length > 0) {
      const indexSelected = hoursState.indexOf(time);
      if (indexSelected >= 0)  {
        // let nums = [];
        // for (let x = indexSelected; x < (indexSelected + numElements); x++) {
        //   nums.push(x)
        // }
        // setServicesSelected(nums);
        setServicesSelected([indexSelected]);
      } 
    }
  }, [time, hoursState]);

  const getHours = () => {
    const timeFrom = moment(daySelected.openFrom, [moment.ISO_8601, 'HH:mm']).hour();
    const timeTill = moment(daySelected.openTill, [moment.ISO_8601, 'HH:mm']).hour();
    
    var arr = [], i, j;
    for( i = timeFrom; i < timeTill; i++) {
      for( j = 0; j < 4; j++) {
        arr.push(i + ":" + (j===0 ? "00" : 15*j) );
      }
    }
    
    setHoursState(arr);
  }

  const handleSelect = (index :number) => {
    // let nums = [];
    // for (let x = index; x < (index + numElements); x++) {
    //   nums.push(x)
    // }
    
    // setHighlightDate([index, ...nums]);
    setHighlightDate([index]);
  }

  const isSelected = (index :number) => {
    const isActive = highlightDate.filter(e => e === index)[0];
    return isActive !== undefined;
  }

  const isActive = (index :number) => {
    const isActive = servicesSelected.filter(e => e === index)[0];
    return isActive !== undefined;
  }

  const handleSelectedTime = (item :string, index :number) => {
    const isAvailable = hoursState[index + (numElements - 1)]

    if (isAvailable) {
      // setSelectedTime(item);
      setTime(item);
      // let nums = [];
      // for (let x = index; x < (index + numElements); x++) {
      //   nums.push(x)
      // }
      // setServicesSelected(nums);
      console.log('index a cguardar', index);
      
      setServicesSelected([index]);
    } else {
      console.log('NO DISPONIBLE');
    }
    
  }

  return (
    <Flex alignItems='center' justify='center' direction='column' w='100%'>
      <Text fontSize='lg' fontWeight='bold' py={2}>Selecciona la hora</Text>
      <Text>Tiempo de servicio aproximado {minutesToHour(totalTime)}</Text>
      <SimpleGrid columns={4} spacing={1} w='100%'>
        { hoursState.map((item :any, index :number) => (
          <Box
            key={index}
            p={2}
            textAlign='center'
            borderWidth={1}
            borderColor='borders'
            cursor='pointer'
            onClick={() => handleSelectedTime(item, index)}
            onMouseEnter={(e) => handleSelect(index)}
            className={`${isSelected(index) ? 'service-selected' : ''} ${isActive(index) ? 'service-active' : ''}`}
          >
            <Text>{item}</Text>
          </Box>
        )) }
      </SimpleGrid>
      <style>{`
        .data-class:nth-child(5) ~ .data-class.apple ~ .data-class.apple {
          background-color: #0ea;
        }

        .service-selected {
          background-color: #25CB67;
          color: #FFF;
        }

        .service-active {
          background-color: #020621 !important;
          color: #FFF;
        }

        .service:hover ~ .service:nth-child(1) {
          background-color: red;
        }
      `}</style>
    </Flex>
  );
}