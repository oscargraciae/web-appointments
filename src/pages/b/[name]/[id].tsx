import React, { useContext } from 'react'
import { Box, Stack, Image, Heading, Text, Button, Divider, useDisclosure, Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// local libraries
import { formatTime } from '../../../utils/formatDate';
import { BusinessService } from '../../../services/businessService';
import { IBusiness } from '../../../types/IBusiness';

// local components
import { Wrapper } from '../../../components/Wrapper';
import { TiLocation, TiDevicePhone } from 'react-icons/ti';
import { ModalBooking } from '../../../components/business/ModalBooking';
import { BookingProvider } from '../../../context/bookingContext';
import { BookingBox } from '../../../components/business/BookingBox';
import { BusinessHours } from '../../../components/business/BusinessHours';
import { BusinessServices } from '../../../components/business/BusinessServices';
import { UserContext } from '../../../context/userContext';
import { MetaBusiness } from '../../../components/business/MetaBusiness';
import { BusinessPhotos } from '../../../components/business/BusinessPhotos';



interface BusinessProps {
  business: IBusiness
}

export const getServerSideProps : GetServerSideProps = async ({ params }) => {
  
  let response = null;
  if (params?.id) {
    response = await new BusinessService().getById(Number(3));
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

  const handleContact = () => {
    if (isLogged) {
      alert(`Hola ${user.firstName}`)
    } else {
      alert('No hay usuairo en sesion');
    }
  }

  return (
    <BookingProvider>
      <MetaBusiness business={business} />
      <ModalBooking business={business} isOpen={isOpen} onClose={onClose} />
      <Wrapper>
        <Flex mb={6}>
          { business.cover && 
            <Image objectFit="cover" w="250px" h='166px'  rounded="md" src={business.cover} />
          }
          <Box pl={6} pr={24}>
            <Heading mt={4} mb={4}>{business.name}</Heading>
            <Text
              my={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="primary"
            >
            {businessCategory?.name}
            </Text>
            <Text fontSize="xs" color='grey' mb={2} display='flex' alignItems='center'>
              <TiLocation />
              {businessAddress?.addressMap}
            </Text>
            <Text fontSize="xs" color='grey' mb={2} display='flex' alignItems='center'>
              <TiDevicePhone />
              {business.phone}
            </Text>
          </Box>
        </Flex>
        <Flex mb={10} direction='row'>
          <Box w='58.33%'>            
            <Box>
              <Heading as="h3" size="lg" mb={3}>Información</Heading>
              <Text py={3} color='subtext'>{business.description}</Text>
            </Box>

            <Divider my={8} />
            { business.businessService && <BusinessServices businessServices={business.businessService} /> } 
            <Divider my={8} />
            { id && <BusinessPhotos businessId={id} /> }
            <Divider my={8} />
            <BusinessHours hours={hours} />
            <Divider my={8} />
          </Box>

          <Box w='36.33%' ml='4.33%' p={4}>
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
