import React, { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react';

import Header from './Header';
import { NavBar } from './NavBar';
import { ModalAuth } from './user/ModalAuth';
import { UserService } from '../services/userService';
import { Footer } from './Footer';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [authView, setauthView] = useState<number>();

  const handleAuthModal = (view :number) => {
    setauthView(view);
    onOpen();    
  }

  return (
    <>
      { authView && <ModalAuth isOpen={isOpen} onClose={onClose} onOpen={onOpen} view={authView}  /> }
      <Header handleAuthModal={handleAuthModal} />
      {/* <Box h='60px' /> */}
      <Box>
        {children}
      </Box>
      <Footer />
    </>
  );
}