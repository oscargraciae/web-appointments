import React, { useContext } from 'react';
import {
  Box, Heading, Flex, Text, Button, Link as Lnk, MenuButton, MenuItem, Menu, MenuList, Spacer,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

import { UserContext } from '../context/userContext';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { user, isLogged } = useContext(UserContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  const menuGuest = () => (
    <>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Spacer />
        { currentRoute !== '/' && (
        <>
          <MenuItems>
            <Link href="/login">
              <Lnk size="sm" variant="link">Iniciar sesión</Lnk>
            </Link>
          </MenuItems>
          <MenuItems>
            <Link href="/signup">
              <Lnk size="sm" variant="link">Regístrate</Lnk>
            </Link>
          </MenuItems>
        </>
        )}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        { currentRoute === '/' && (
          <Link href="/stores">
            <Lnk as={Button} mr={2}>Ver negocios</Lnk>
          </Link>
        )}
        <Link href='/'>
          <Lnk fontWeight="bold" as={Button} variant="secondary">
            Comienza a vender
          </Lnk>
        </Link>
      </Box>
    </>
  );

  const menuAuth = () => {
    return (
      (
        <>
          {/* MOVIL */}
          <Box
            display={{ base: show ? 'block' : 'none', md: 'none' }}
            width={{ base: 'full', sm: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
          >
            <MenuItems>
              <Link href="/orders">
                <Lnk size="sm">Mis compras</Lnk>
              </Link>
            </MenuItems>
            <MenuItems>
              <Link href="/logout">
                <Lnk size="sm">Salir</Lnk>
              </Link>
            </MenuItems>

            <Box
              display={{ base: show ? 'block' : 'none', md: 'block' }}
              mt={{ base: 4, md: 0 }}
            >
              { isLogged ? <Link href='/' size="sm" variant="link" ml={4}>Administrar mi tienda</Link>
                : <Button size="sm" variant="link" ml={4}>Publica tu tienda</Button>
              }
            </Box>
          </Box>

          {/* WEB */}
          <Flex flex={1} justify="flex-end" align="center" display={{ base: 'none', md: 'flex' }}>
            { isLogged ? <Lnk href='/manager' size="sm" variant="primary" mx={3}>Modo negocio</Lnk>
              : <Button size="sm" variant="primary" ml={4}>Comienza a vender</Button> }
            <Menu>
              <MenuButton as={Lnk} rightIcon={FiChevronDown({})} mx={3} variant='primary'>
                Cuenta
              </MenuButton>
              <MenuList zIndex={3} borderColor="#DDD">
                <MenuItem onClick={() => router.push('/orders')}>Perfil</MenuItem>
                <MenuItem onClick={() => router.push('/orders')}>Direcciónes</MenuItem>
                <MenuItem onClick={() => router.push('/orders')}>Mis reservas</MenuItem>
                <MenuItem onClick={() => router.push('/logout')}>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </>
      )
    );
  };

  return (
    <Flex
      w='100%'
      h='60px'
      shadow="md"
      borderBottomWidth={1} 
      borderColor='borders' 
      zIndex={99}
      pos='fixed' 
      px={6}
      bg="#FFFFFF"
      color="#333"
      boxShadow="md"
    >
      <Flex align='center'>
        <Link href="/">
          <Lnk>
            <img src="/logo-reserly-2.png" alt="uorder" width="120" height="90" />
          </Lnk>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="#333"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      { isLogged ? menuAuth() : menuGuest() }

    </Flex>
  );
};

export default Header;
