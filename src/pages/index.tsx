import React, { useEffect, useState } from  'react';
import { Box, Flex, Input, Stack, Text, Button, Wrap, WrapItem, Center, HStack, Image, Link } from '@chakra-ui/react';
import Rotuer, { useRouter } from 'next/router';
import { TiCalendar, TiStar, TiLocation } from 'react-icons/ti';

import { Layout } from '../components/Layout';
import { Wrapper } from '../components/Wrapper';
import { InputSearch } from '../components/home/InputSearch';
import { CategoryService } from '../services/categoryService';
import { query } from 'express';
import { stringToUrl, urlToString } from '../utils/stringToUrl';

export const getServerSideProps = async (props: any) => {
  
  let address;
  let placeId;

  if (!query.geo) {
    address = 'Monterrey, Nuevo León';
    placeId = 'ChIJ9fg3tDGVYoYRlJjIasrT06M';
  }
  
  console.log('Parametros', props.query);

  
  return {
    props: {
      id: 1,
      data: props.query,
      address,
      placeId,
    },
  }
}

const Index = ({ address, placeId }) => {
  
  
  // hooks
  const router = useRouter();
  // state
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories} = await new CategoryService().getAll()
      setCategories(categories);
    };
    fetchCategories();
  }, [])
  return (
    <Flex justify="center" align="center" w="100%" bgSize="cover" direction='column'>
      <Flex w='100%' h='340px' alignItems='center' bg='linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-main.jpg);' bgSize='cover' bgRepeat='no-repeat'>
        <Text mx='auto' pt={10} width="800px" mt={2} fontSize="4xl" fontWeight="semibold" lineHeight="short" textAlign='center' color='#FFF' zIndex={20}>
          Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.
        </Text>
      </Flex>
      
      <Box width="700px" bg="transparent" p="16px" rounded="sm" zIndex={10} mt='-50px'>
        <InputSearch />

        <Wrap spacing={4} mt={4} justify='center'>
          { categories.map((item :any) => (
            <WrapItem>
              <Link
                borderRadius={3}
                w="144px"
                textAlign='center'
                py={2}
                bg="secondary"
                color='#FFF'
                href={`/explore/${item.name}/${stringToUrl(address)}?cat=${item.id}&placeId=${placeId}`}
              >
                {item.name}
              </Link>
            </WrapItem>
          )) }
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

export default Index;