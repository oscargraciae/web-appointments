import React, { useContext, useEffect, useState } from  'react';
import { Box, Flex, Input, Stack, Text, Button, Wrap, WrapItem, Center, HStack, Image, Link } from '@chakra-ui/react';
import Rotuer, { useRouter } from 'next/router';
import { TiCalendar, TiStar, TiLocation } from 'react-icons/ti';

import { Layout } from '../components/Layout';
import { Wrapper } from '../components/Wrapper';
import { InputSearch } from '../components/home/InputSearch';
import { CategoryService } from '../services/categoryService';
import { stringToUrl, urlToString } from '../utils/stringToUrl';
import { UserContext } from '../context/userContext';

// geo: {
//   range: [ 3147849728, 3147851775 ],
//   country: 'MX',
//   region: 'NLE',
//   eu: '0',
//   timezone: 'America/Monterrey',
//   city: 'Apodaca',
//   ll: [ 25.7657, -100.2159 ],
//   metro: 0,
//   area: 5
// }

export const getServerSideProps = async ({ query } : any) => {
  
  let address = query.geo.city;
  
  return {
    props: {
      id: 1,
      data: query,
      address,
      geo: query.geo,
    },
  }
}

const Index = ({ address, geo } : any) => {

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
    <Flex justify="center" align="center" w="100%" bgSize="cover" direction='column' mb={16}>
      <Flex w='100%' h='340px' alignItems='center' bg='linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-main.jpg);' bgSize='cover' bgRepeat='no-repeat'>
        <Text fontFamily='Nunito' mx='auto' pt={10} width={{ base: '90%', md: '800px' }} mt={2} fontSize={{ base: 'xl', md: '4xl' }} fontWeight="bold" lineHeight="short" textAlign='center' color='#FFF' zIndex={20}>
          Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.
        </Text>
      </Flex>
      
      <Box width={{ base: '90%', md: '700px' }} bg="transparent" p="16px" rounded="sm" zIndex={10} mt='-50px'>
        <InputSearch />

        <Wrap spacing={4} mt={6} justify='center'>
          { categories.map((item :any) => (
            <WrapItem key={item.id}>
              <Link
                borderRadius={3}
                w="144px"
                textAlign='center'
                fontWeight='600'
                py={2}
                bg="accent"
                color='#FFF'
                href={`/explore/${item.name}/${stringToUrl(address)}`}
              >
                {item.name}
              </Link>
            </WrapItem>
          )) }
        </Wrap>
      </Box>

      <Wrapper>
        <Flex zIndex={10} my={10}>
          <Flex justify='space-between' alignItems='center' direction={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '80%', md: '32%' }} my={4}>
              <HStack alignItems='center'>
                <TiLocation size={24} />
                <Text fontWeight='bold' fontSize='lg'>Ubicación</Text>
              </HStack>
              <Text color='subtext'>Reserly te permite localizar negocios cercanos a tu ubicación.</Text>
            </Box>
            <Box w={{ base: '80%', md: '32%' }} my={4}>
              <HStack>
                <TiStar size={24} />
                <Text fontWeight='bold' fontSize='lg'>Mayor confianza</Text>
              </HStack>
              <Text color='subtext'>Elige el negocio que se adapte a lo que tu necesitas, comparando los servicios, precio y comentarios.</Text>
            </Box>
            <Box w={{ base: '80%', md: '32%' }} my={4}>
              <HStack>
                <TiCalendar size={24} />
                <Text fontWeight='bold' fontSize='lg'>Reservaciones</Text>
              </HStack>
              <Text color='subtext'>Selecciona los servicios que necesitas y reserva de manera segura, disponible las 24 horas del día.</Text>
            </Box>
          </Flex>
        </Flex>
      </Wrapper>

    </Flex>
  )
}

export default Index;