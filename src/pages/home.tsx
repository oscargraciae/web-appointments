import React from  'react';
import { Box, Flex, Input, Stack, Text, Button, Wrap, WrapItem, Center, HStack, Image } from '@chakra-ui/react';
import Rotuer from 'next/router';
import { TiCalendar, TiStar, TiLocation } from 'react-icons/ti';

import { Layout } from '../components/Layout';
import { Wrapper } from '../components/Wrapper';

const Home = () => {
  return (
    <Flex justify="center" align="center" w="100%" bgSize="cover" direction='column'>
      <Flex w='100%' h='340px' alignItems='center' bg='linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-main.jpg);' bgSize='cover' bgRepeat='no-repeat'>
        <Text mx='auto' pt={10} width="800px" mt={2} fontSize="4xl" fontWeight="semibold" lineHeight="short" textAlign='center' color='#FFF' zIndex={20}>
          Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.
        </Text>
      </Flex>
      
      <Box width="700px" bg="transparent" p="16px" rounded="sm" zIndex={10} mt='-50px'>
        <Stack mt={0} isInline bg='#FFF' px={2} py={2} boxShadow='0px 5px 10px rgba(0,0,0,.08)' borderRadius={6}>
          <Input placeholder="Ubicación" size="lg" border='0px' fontWeight='600' />
          <Button variant='primary' size="lg" onClick={() => Rotuer.push('/explore')}>
            Buscar
          </Button>
        </Stack>

        <Wrap spacing={4} mt={4} justify='center'>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Salon</Center>
          </WrapItem>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Spa</Center>
          </WrapItem>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Barberia</Center>
          </WrapItem>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Tatuajes</Center>
          </WrapItem>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Maquillaje</Center>
          </WrapItem>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Depilación</Center>
          </WrapItem>
          <WrapItem>
            <Center borderRadius={3} w="144px" h="44px" bg="secondary" color='#FFF'>Mascotas</Center>
          </WrapItem>
        </Wrap>
      </Box>

      <Wrapper>
        <Flex zIndex={10}>
          <HStack justify='space-between'>
            <Box w='32%'>
              <HStack alignItems='center'>
                <TiLocation size={24} />
                <Text fontWeight='bold' fontSize='lg'>Ubicación</Text>
              </HStack>
              <Text color='subtext'>Reserly te permite localizar negocios cercanos a tu ubicación.</Text>
            </Box>
            <Box w='32%'>
              <HStack>
                <TiStar size={24} />
                <Text fontWeight='bold' fontSize='lg'>Mayor confianza</Text>
              </HStack>
              <Text color='subtext'>Elige el negocio que se adapte a lo que tu necesitas, comparando los servicios, precio y comentarios.</Text>
            </Box>
            <Box w='32%'>
              <HStack>
                <TiCalendar size={24} />
                <Text fontWeight='bold' fontSize='lg'>Reservaciones</Text>
              </HStack>
              <Text color='subtext'>Selecciona los servicios que necesitas y reserva de manera segura, disponible las 24 horas del día.</Text>
            </Box>
          </HStack>
        </Flex>
      </Wrapper>

    </Flex>
  )
}

export default Home;