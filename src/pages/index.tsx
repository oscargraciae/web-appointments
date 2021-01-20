import React from  'react';
import { Box, Flex, Input, Stack, Text, Button } from '@chakra-ui/react';
import Rotuer from 'next/router';

import { Layout } from '../components/Layout';

const Index = () => {
  return (
    <Flex justify="center" align="center" bgImg="url(/bg-home-3.jpg)" w="100%" h="500px" bgSize="cover">
      <Box width="700px" bg="white" p="32px" rounded="sm">
        <Text mt={2} fontSize="3xl" fontWeight="semibold" lineHeight="short">
          Encuentra el servicios profesionales cerca de ti y reserva fácil, rápido y seguro.
        </Text>
        <Stack mt={8} isInline>
          <Input placeholder="Basic usage" size="lg" />
          <Button variant='primary' size="lg" onClick={() => Rotuer.push('/explore')}>
            Buscar
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Index;