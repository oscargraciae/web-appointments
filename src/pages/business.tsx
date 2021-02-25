import React, { useContext, useState } from 'react'
import { Box, Image, Heading, Text, Button, Divider, useDisclosure, Flex, Alert, AlertTitle } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

// local libraries
import { BusinessService } from '../services/businessService';
import { IBusiness } from '../types/IBusiness';

// local components
import { Wrapper } from '../components/Wrapper';
import { TiLocation, TiDevicePhone } from 'react-icons/ti';
import { ModalBooking } from '../components/business/ModalBooking';
import { BookingProvider } from '../context/bookingContext';
import { BookingBox } from '../components/business/BookingBox';
import { BusinessHours } from '../components/business/BusinessHours';
import { BusinessServices } from '../components/business/BusinessServices';
import { UserContext } from '../context/userContext';
import { MetaBusiness } from '../components/business/MetaBusiness';
import { BusinessPhotos } from '../components/business/BusinessPhotos';
import { BookingBoxMobile } from '../components/business/BookingBoxMobile';
import Head from 'next/head';

interface BusinessProps {
  business: IBusiness
}

export const getServerSideProps : GetServerSideProps = async ({ query }) => {
  let response = null;
  if (query?.id) {
    response = await new BusinessService().getById(Number(query.id));
  }
  
  return {
    props: {
      id: 1,
      business: response?.business,
    },
  }
}

const Business: React.FC<BusinessProps> = ({ business }) => {
  const { businessAddress, businessCategory, hours, id } = business;

  // context
  const { user, isLogged, setOpenModalLogin, openModalLogin } = useContext(UserContext);

  // hooks
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleBooking = () => {
    if (isLogged) {
      onOpen();
    } else {
      setOpenModalLogin(true);
    }
    
  };

  console.log('business', business);
  
  return (
    <BookingProvider>
      {/* <Head>
        <title>{business.name} en {business.businessAddress?.addressMap} - Reserly</title>
        <meta name="description" content={`Reserva con ${business.name} en ${business.businessAddress?.addressMap} ¡en minutos!`}></meta>
      </Head> */}
      <MetaBusiness business={business} />
      <ModalBooking business={business} isOpen={isOpen} onClose={onClose} />
      <Wrapper>
        <Flex mb={6} pb={4} borderBottomWidth={2} borderColor='borders' justifyContent='space-between'>
          <Box pl={0} pr={{ base: 0, md: 24 }} w={{ base: '100%', md: '880px' }} textAlign={{ base: 'center', md: 'left' }}>
            <Heading mt={4} mb={4} fontSize='44px'>{business.name}</Heading>
            <Text
              my={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="accent"
            >
            {businessCategory?.name}
            </Text>
            <Text fontSize="sm" color='grey' mb={2} display='flex' justifyContent={{ base: 'center', md: 'flex-start' }}>
              <TiLocation style={{ marginBottom: '2px', marginRight: '4px' }} size='18px' />
              {businessAddress?.addressMap}
            </Text>
            { business.phone &&
              <Text fontSize="sm" color='grey' mb={2} display='flex' alignItems='center' justifyContent={{ base: 'center', md: 'flex-start' }}>
                <TiDevicePhone style={{ marginBottom: '2px', marginRight: '4px' }} size='18px' />
                {business.phone}
              </Text>
            }
            <Text py={3} color='subtext'>{business.description}</Text>
          </Box>
          { business.cover && 
            <Box w='300px' display={{ base: 'none', md: 'block' }}>
              <Image objectFit="cover" htmlWidth="300px" htmlHeight='200px' w="300px" h='200px'  rounded="md" src={business.cover} />
            </Box>
          }
        </Flex>
        <Flex mb={10} direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '99%', md: '58.33%' }} px={{ base: 3, md: 0 }}>
            { business.businessService && <BusinessServices businessServices={business.businessService} /> } 
            { id && <BusinessPhotos businessId={id} /> }
            <Divider my={8} />
            <BusinessHours hours={hours} />
            <Divider my={8} />
          </Box>

          { business.isPublic &&
          <Box w='36.33%' ml='4.33%' px={4} display={{ base: 'none', md: 'block' }}>
            <Box pos='sticky' top='70px' right='0px' h='100vh'>
              {/* <Button size='lg' isFullWidth variant='outline' colorScheme='gray' onClick={handleContact}>Contactar al negocio</Button> */}
              <BookingBox handleBooking={handleBooking} />
            </Box>
          </Box>
          }

          { !business.isPublic &&
          <Box w='36.33%' ml='4.33%' px={4} display={{ base: 'none', md: 'block' }}>
            <Alert status='warning'>
              <AlertTitle>Este negocio se encuentra cerrado por el momento.</AlertTitle>
            </Alert>
          </Box>
          }

        </Flex>
          
        <BookingBoxMobile handleBooking={handleBooking} />
        

      </Wrapper>
    </BookingProvider>
  );
}

export default Business;
