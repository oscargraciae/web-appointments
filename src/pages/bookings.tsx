import React, { useState } from 'react'
import NextHead from 'next/head';
import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import { BookingsList } from '../components/bookings/BookingsList';
import { Wrapper } from '../components/Wrapper';

const MenuLink: React.FC<{ title: string, onClick: any, isActive: boolean }> = ({title, onClick, isActive}) => (
  <Button bg={isActive ? 'primary' : ''} variant='ghost' fontWeight='bold' pr={6} onClick={onClick}>
    <Text color={isActive ? '#FFF' : ''} fontSize='md'>{title}</Text>
  </Button>
)

const Bookings: React.FC = ({}) => {
  const [tab, setTab] = useState(1);
  return (
    <Wrapper>
      <NextHead>
        <title>Reserly - Mis reservaciones</title>
      </NextHead>
      <Box>
        <Heading>Mis reservaciones</Heading>
        <Box bg='surface' borderBottomWidth={1} borderColor='borders' py={3} minH='80vh'>
          <Box>
            <HStack mt={4} borderBottomWidth={1} borderColor='borders' p={3}>
              <MenuLink title='Proximas' onClick={() => setTab(1)} isActive={tab === 1} />
              <MenuLink title='Historial' onClick={() => setTab(2)} isActive={tab === 2} />
            </HStack>
            { tab === 1 && <BookingsList tab={tab} /> }
            { tab === 2 && <BookingsList tab={tab} /> }
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default Bookings;