import React from 'react'
import { Flex, Stack, Text, Button } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface BookingSuccessProps {}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({}) => {

  const router = useRouter();

  const handleConfimration = () => {
    router.push('/');
  }

  return (
    <Flex justify="center" align="center" spacing={4} direction='column' mt={6}>
      <AiFillCheckCircle size={70} color="#3BCF75" />
      <Text my={4} fontWeight="bold" fontSize="lg">RESERVACIÓN CONFIRMADA</Text>
      <Text fontSize="sm" my={4} textAlign='center'>
        Tu reservación se realizó correctamente, mantente al pendiente por si el negocio quiere comunicarse contigo o ocurrió alguna actualización de la reservación.
      </Text>
      <Button my={4} size="lg" isFullWidth variant='primary' color="#FFF" onClick={handleConfimration}>
        Aceptar
      </Button>
    </Flex>
  );
}