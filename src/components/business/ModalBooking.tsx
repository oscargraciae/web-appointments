import React, { useContext, useState } from 'react'
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text } from '@chakra-ui/react';
import moment from 'moment';

import { CalendarDate } from './CalendarDate';
import { IBusiness } from '../../types/IBusiness';
import { CalendarTime } from './CalendarTime';
import { BookingContext } from '../../context/bookingContext';
import { BookingResume } from './BookingResume';
import { BookingService } from '../../services/bookingService';
import { BookingSuccess } from './BookingSuccess';


interface ModalBookingProps {
  business: IBusiness
  isOpen: boolean
  onClose: any
}

export const ModalBooking: React.FC<ModalBookingProps> = ({ business, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { step, setStep, time, date, message, services, setServices, totalTime } = useContext(BookingContext);

  const submitBooking = async () => {
    setIsLoading(true);
    
    const d = moment(date).format('YYYY-MM-DD').toString();
    const dateB = moment(`${d} ${time}`).toDate();
    
    const response = await new BookingService().create({
      // bookingDate: moment(date).format('YYYY-MM-DD').toString(),
      bookingDate: dateB,
      bookingTime: time,
      message,
      businessId: business.id,
      businessServices: services,
      totalTime,
    })

    if (response.success) {
      setStep(4);
      setServices([]);
    }
    setIsLoading(false);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction='column'>
            { step === 1 && <CalendarDate hours={business.hours} /> }
            { step === 2 && <CalendarTime hours={business.hours} /> }
            { step === 3 && <BookingResume /> }
            { step === 4 && <BookingSuccess /> }
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex justify='space-between' w='100%'>
            { (step > 1 && step < 4) && <Button variant='outline' onClick={() => setStep(step - 1)}>Atrás</Button>}
            <Spacer />
            { step < 3 && <Button alignSelf='flex-end' variant='primary' onClick={() => setStep(step + 1)}>Siguiente</Button>}

            { step === 3 && <Button alignSelf='flex-end' variant='primary' onClick={submitBooking} isLoading={isLoading}>Confirmar reserva</Button>}
          </Flex>
          
        </ModalFooter>
      </ModalContent>
      <style>{`
        .react-datepicker__header {
          background-color: #FFF;
          border-bottom: none;
        }

        .react-datepicker__current-month {
          padding-bottom: 20px;
        }

        .react-datepicker {
          font-size: 14px;
          border: none;
        }

        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
        }

        .react-datepicker__day-name {
          color: red;
          font-size: 12px;
          color: rgb(113, 113, 113) !important;
        }

        .react-datepicker__day--selected {
          background-color: #325CB67;
        }
        

      `}</style>
    </Modal>      
  );
}