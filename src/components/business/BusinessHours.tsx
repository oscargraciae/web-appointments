import React from 'react'
import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';
import { formatTime } from '../../utils/formatDate';

interface BusinessHoursProps {
  hours :any
}

const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

export const BusinessHours: React.FC<BusinessHoursProps> = ({ hours }) => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>Horarios</Heading>
      <Stack mt={3} width='50%'>
        { hours.map((item :any) => {
          if (!item.isOpen) {
            return (
              <Stack isInline py={1} justify='space-between' key={item.id}>
                <Text fontSize='sm'>{nameDays[item.dayOfWeek]}</Text>
                <Text fontSize='sm'>Cerrado</Text>
              </Stack>
            )
          }
          return (
            <Stack isInline py={1} justify='space-between' key={item.id}>
              <Text fontSize='sm'>{nameDays[item.dayOfWeek]}</Text>
              <Text fontSize='sm'>{formatTime(item.openFrom)} - {formatTime(item.openTill)}</Text>
            </Stack>
          )
          
        }) }
      </Stack>
    </Box>
  );
}