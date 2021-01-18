import React from 'react'
import { Box, Stack, Image, Heading, Text, Button, Divider, useDisclosure } from '@chakra-ui/react';
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

const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

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
  const { businessAddress, businessCategory, hours } = business;

  // hooks
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleBooking = () => {
    onOpen();
  }

  return (
    <BookingProvider>
      <ModalBooking business={business} isOpen={isOpen} onClose={onClose} />
      <Wrapper>
        <Stack isInline mb={10}>
          <Box pr={16} w='60%'>
            <Stack isInline pb={12}>
              { business.cover && 
                <Image objectFit="cover" boxSize="200px" rounded="md" src={business.cover} />
              }
              <Box>
                <Heading mt={4}>{business.name}</Heading>
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
            </Stack>

            <Divider />
            
            <Box py={12}>
              <Heading as="h3" size="lg">Información</Heading>
              <Text py={3}>{business.description}</Text>
            </Box>
            <Divider />

            <Box py={12}>
              <Heading as="h3" size="lg">Horarios</Heading>
              <Stack mt={3} width='50%'>
                { hours.map((item :any) => {
                  if (!item.isOpen) {
                    return (
                      <Stack isInline py={1} justify='space-between' key={item.id}>
                        <Text>{nameDays[item.dayOfWeek]}</Text>
                        <Text>Cerrado</Text>
                      </Stack>
                    )
                  }
                  return (
                    <Stack isInline py={1} justify='space-between' key={item.id}>
                      <Text>{nameDays[item.dayOfWeek]}</Text>
                      <Text>{formatTime(item.openFrom)} - {formatTime(item.openTill)}</Text>
                    </Stack>
                  )
                  
                }) }
              </Stack>
            </Box>

          </Box>

          <Box w='40%' mt='-60px' p={4}>
            <Box pos='sticky' top='0px' right='0px' h='100vh'>
              <Button size='lg' isFullWidth variant='outline' colorScheme='gray'>Contactar al negocio</Button>
              { business.businessService && <BookingBox handleBooking={handleBooking} businessService={ business.businessService } /> }
            </Box>
          </Box>
        </Stack>
      </Wrapper>
    </BookingProvider>
  );
}

export default Business;
