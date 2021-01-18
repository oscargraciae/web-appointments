import React, { useContext, useState } from 'react'
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text } from '@chakra-ui/react';
import { CalendarDate } from './CalendarDate';
import { IBusiness } from '../../types/IBusiness';
import { CalendarTime } from './CalendarTime';
import { BookingContext } from '../../context/bookingContext';
import { BookingResume } from './BookingResume';
import { BookingService } from '../../services/bookingService';


interface ModalBookingProps {
  business: IBusiness
  isOpen: boolean
  onClose: any
}

export const ModalBooking: React.FC<ModalBookingProps> = ({ business, isOpen, onClose }) => {

  const { step, setStep, time, date, message } = useContext(BookingContext);

  const submitBooking = () => {
    const response = new BookingService().create({
      bookingDate: date,
      bookingTime: time,
      message,
      businessId: business.id,
    })

    console.log('Respuesta de reserva', response);
    
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
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex justify='space-between' w='100%'>
            { step > 1 && <Button variant='outline' onClick={() => setStep(step - 1)}>Atrás</Button>}
            <Spacer />
            { step < 3 && <Button alignSelf='flex-end' variant='primary' onClick={() => setStep(step + 1)}>Siguiente</Button>}

            { step === 3 && <Button alignSelf='flex-end' variant='primary' onClick={submitBooking}>Confirmar reserva</Button>}
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