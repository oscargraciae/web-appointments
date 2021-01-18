import { Box } from '@chakra-ui/react';
import React from 'react'

import Header from './Header';
import { NavBar } from './NavBar';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box h='60px' />
      <Box>
        {children}
      </Box>
      
    </>
  );
}