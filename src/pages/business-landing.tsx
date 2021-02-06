import React, {  } from  'react';
import { Box, Flex, Text, HStack, Button, Link, Heading, Image, SimpleGrid, Divider } from '@chakra-ui/react';
import { TiCalendar, TiStar, TiLocation } from 'react-icons/ti';

import { Wrapper } from '../components/Wrapper';

const BusinessLanding = ({  } : any) => {

  return (
    <Flex justify="center" align="center" w="100%" bgSize="cover" direction='column'>
      <Flex direction='column' w='100%' h='340px' alignItems='center' justifyContent='center' bg='linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-negocios.jpg);' bgSize='cover' bgRepeat='no-repeat'>
        <Text mx='auto' width="800px" mt={2} fontSize="4xl" fontWeight="bold" lineHeight="short" textAlign='center' color='#FFF' zIndex={20}>
          Recibe reservaciones online y gestiona la agenda de tu negocio.
        </Text>
        <Text mx='auto' pt={3} width="800px" fontWeight='semibold' fontSize="sm" textAlign='center' color='#FFF' zIndex={20}>
          Gratis. Disponible las 24 horas. Más clientes. Menos distracciones.
        </Text>
        <Link variant='primary-solid' mt={6} href={`${process.env.NEXT_PUBLIC_MANAGER_URL}/`}>
          REGISTRA TU NEGOCIO GRATIS
        </Link>
      </Flex>
      
      <Wrapper>
        <Flex direction='column' justifyContent='center' alignItems='center' maxW='70%' mx='auto' my={12}>
          <Heading mb={4}>La mejor forma de gestionar reservas</Heading>
          <Text textAlign='center' my={4} fontSize='lg'>
            Administra tu tiempo y el de tus clientes. Con Reserly podrás recibir reservaciones online, enviar recordatorios de citas, exponerte a más personas gracias a nuestro portal para clientes y mucho más. <strong>Servicio gratuito.</strong>
          </Text>
        </Flex>

        <Divider my={20} />

        <Flex direction='row' justifyContent='space-between' mb={20}>
          <SimpleGrid columns={2} spacing={6} ml={6} w='42%'>
            <Box>
              <HStack alignItems='center'>
                <Text fontWeight='bold' fontSize='lg'>Calendario</Text>
              </HStack>
              <Text color='subtext'>Visualiza todas tus citas de forma clara y organizada, con el calendario de Reserly ten tus reservas en un solo lugar.</Text>
            </Box>
            <Box>
              <HStack alignItems='center'>
                <Text fontWeight='bold' fontSize='lg'>Notificaciones</Text>
              </HStack>
              <Text color='subtext'>Reserly te enviará notificaciones para avisarte de una nueva reservación.</Text>
            </Box>

            <Box>
              <HStack alignItems='center'>
                <Text fontWeight='bold' fontSize='lg'>Reservaciones online 24/7</Text>
              </HStack>
              <Text color='subtext'>Somos tu asistente personal. La gente puede realizar reservaciones 24/7 y sin interverveciones incluso cuando tu negocio está cerrado.</Text>
            </Box>

            <Box>
              <HStack alignItems='center'>
                <Text fontWeight='bold' fontSize='lg'>Aplicación movil</Text>
              </HStack>
              <Text color='subtext'>Con la aplicación móvil de Reserly podras ver y controlar las reservaciones de tu negocio las 24 horas del día.</Text>
            </Box>
          </SimpleGrid>
          <Image src='/agenda-landing.png' w='53%' />
        </Flex>

        <Flex direction='column' justifyContent='center' alignItems='center' maxW='50%' mx='auto' my={12} bg='primaryLight' p={10} borderRadius={3}>
          <Text fontWeight='bold' fontSize='2xl' color='secondary'>Comienza ahora creando tu cuenta gratis.</Text>
          <Link variant='primary-solid' mt={6} href={`${process.env.NEXT_PUBLIC_MANAGER_URL}/`}>
            ÚNETE A RESERLY
          </Link>
        </Flex>
        
      </Wrapper>

    </Flex>
  )
}

export default BusinessLanding;