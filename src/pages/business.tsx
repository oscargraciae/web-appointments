import React, { useContext } from 'react'
import { Box, Stack, Image, Heading, Text, Button, Divider, useDisclosure, Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// local libraries
import { formatTime } from '../utils/formatDate';
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

interface BusinessProps {
  business: IBusiness
}

export const getServerSideProps : GetServerSideProps = async ({ query }) => {
  console.log('query name', query.name);
  
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
  const { user, isLogged } = useContext(UserContext);

  // hooks
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleBooking = () => onOpen();

  return (
    <BookingProvider>
      <MetaBusiness business={business} />
      <ModalBooking business={business} isOpen={isOpen} onClose={onClose} />
      <Wrapper>
        <Flex mb={6} pb={4} borderBottomWidth={2} borderColor='borders' justifyContent='space-between'>
          <Box pl={0} pr={24} w='880px'>
            <Heading mt={4} mb={4} fontSize='44px'>{business.name}</Heading>
            <Text
              my={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="primary"
            >
            {businessCategory?.name}
            </Text>
            <Text fontSize="sm" color='grey' mb={2} display='flex' alignItems='center'>
              <TiLocation style={{ marginBottom: '2px', marginRight: '4px' }} size='18px' />
              {businessAddress?.addressMap}
            </Text>
            { business.phone &&
              <Text fontSize="sm" color='grey' mb={2} display='flex' alignItems='center'>
                <TiDevicePhone style={{ marginBottom: '2px', marginRight: '4px' }} size='18px' />
                {business.phone}
              </Text>
            }
            <Text py={3} color='subtext'>{business.description}</Text>
          </Box>
          { business.cover && 
            <Box w='300px'>
              <Image objectFit="cover" htmlWidth="300px" htmlHeight='200px' w="300px" h='200px'  rounded="md" src={business.cover} />
            </Box>
          }
        </Flex>
        <Flex mb={10} direction='row'>
          <Box w='58.33%'>            
            { business.businessService && <BusinessServices businessServices={business.businessService} /> } 
            { id && <BusinessPhotos businessId={id} /> }
            <Divider my={8} />
            <BusinessHours hours={hours} />
            <Divider my={8} />
          </Box>

          <Box w='36.33%' ml='4.33%' px={4}>
            <Box pos='sticky' top='70px' right='0px' h='100vh'>
              {/* <Button size='lg' isFullWidth variant='outline' colorScheme='gray' onClick={handleContact}>Contactar al negocio</Button> */}
              <BookingBox handleBooking={handleBooking} />
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    </BookingProvider>
  );
}

export default Business;
