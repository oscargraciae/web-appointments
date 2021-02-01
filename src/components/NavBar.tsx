import React, { useContext, useEffect } from 'react'
import { Box, Link, Flex, Button, Stack, Image, Menu, MenuButton, MenuList, MenuItem, HStack, Avatar } from '@chakra-ui/react';
import NextLink from 'next/link';
import Router, { useRouter } from 'next/router'
import { BiChevronDown } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

import { UserContext } from '../context/userContext';
import nProgress from 'nprogress';

// import { isServer } from '../utils/isServer';

interface NavBarProps {}

// Router.onRouteChangeStart = () => {
//   return NProgress.start();
// };
// Router.onRouteChangeComplete = () => {
//   return NProgress.done();
// };
// Router.onRouteChangeError = () => {
//   return NProgress.done();
// };

export const NavBar: React.FC<NavBarProps> = ({}) => {

  const { user, isLogged } = useContext(UserContext);
  console.log('isLopgged', isLogged);
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => {
  //     console.log('Cambiando de pagina');
  //     nProgress.start();
  //   });
  //   Router.events.on("routeChangeComplete", nProgress.done);
  //   Router.events.on("routeChangeError", nProgress.done);
  // }, []);
  

  const menuAuth = () => {
    return (
      <Flex bg='tomato' w='100%'>
        <Menu>
          <MenuButton as={Link} rightIcon={FiChevronDown({})}>
            <HStack>
              <Avatar bg="teal.500" size='sm' />
              { user.firstName } 
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Salir</MenuItem>
          </MenuList>
        </Menu>
        <Button variant="link">logout</Button>
      </Flex>
    )
  }

  const menuGuest = () => {
    return (
      <Flex>
        <NextLink href="/manager/login">
          <Link as={Button}>Inicio de sesion</Link>
        </NextLink>
        <NextLink href="/manager/login">
          <Link>Perfil</Link>
        </NextLink>
        <NextLink href="/manager/register">
          <Link>Salir</Link>
        </NextLink>
      </Flex>
    )
  }

  return (
    <Flex w='100%' h='60px' shadow="md" p={4} borderBottomWidth={1} borderColor='borders' zIndex={99} pos='fixed' bg='white'>
      <Stack isInline justifyContent="space-between" flex={1} align='center'>
        <Box>
          <NextLink href="/explore">
            <Image src="/reserly-logo.png" height='32px' />
          </NextLink>
        </Box>
        <Box ml={'auto'}>
          { isLogged ? menuAuth() : menuGuest() }
        </Box>
      </Stack>
    </Flex>
  );
}