import React, { useContext, useState } from 'react';
import {
  Box, Heading, Flex, Text, Button, Link, MenuButton, MenuItem, Menu, MenuList, Spacer, MenuDivider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ReachLink from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

import { UserContext } from '../context/userContext';

const MenuItems = ({ children } : any) => (
  <Box mt={{ base: 4, md: 0 }} mx={3} display="block">
    {children}
  </Box>
);

const Header = ({ handleAuthModal } : any) => {
  // context
  const { user, isLogged, logout } = useContext(UserContext);

  // hooks
  const router = useRouter();
  
  // state
  const [show, setShow] = useState(false);

  const currentRoute = router.pathname;

  const handleToggle = () => setShow(!show);

  const menuGuest = () => (
    <>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Spacer />
        <MenuItems>
          <Link href='/' fontWeight="bold" variant="primary">
            Publica tu negocio
          </Link>
        </MenuItems>
        <MenuItems>
          <Link variant="primary" onClick={() => handleAuthModal(1)}>
            Iniciar sesión
          </Link>
        </MenuItems>
        <MenuItems>
          <Link variant="primary-btn" onClick={() => handleAuthModal(2)}>
            Regístrate
          </Link>
        </MenuItems>
      </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
      </Box>
    </>
  );

  const menuAuth = () => {
    return (
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
              Mis compras
            </Link>
          </MenuItems>
          <MenuItems>
            <Link href="/logout">
              Salir
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
          {/* { user.businessUser ? <Link href='/manager' size="sm" variant="primary" mx={3}>Administrar mi negocio</Link>
            : <Button size="sm" variant="primary" ml={4}>Comienza a vender</Button> } */}
          <Menu variant='primary'>
            <MenuButton as={Button} rightIcon={<FiChevronDown />} mx={3} variant='ghost'>
              Mi cuenta
            </MenuButton>
            <MenuList zIndex={3} borderColor="#DDD">
              {/* <MenuItem onClick={() => router.push('/orders')}>Perfil</MenuItem>
              <MenuItem onClick={() => router.push('/orders')}>Direcciónes</MenuItem> */}
              <MenuItem onClick={() => router.push('/orders')}>Mis reservas</MenuItem>
              <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
              <MenuDivider />
                { user.businessUser 
                  ? <MenuItem onClick={logout} color='primary'>Administrar mi negocio</MenuItem>
                  : <MenuItem onClick={logout} color='primary'>Publica tu negocio</MenuItem>
                }
            </MenuList>
          </Menu>
        </Flex>
      </>
    )
  };

  return (
    <Flex
      w='100%'
      h='66px'
      shadow="md"
      alignItems='center'
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
          <img src="/logo-reserly-2.png" alt="uorder" width="120" height="90" />
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
