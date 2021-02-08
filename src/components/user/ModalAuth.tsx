import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { InputField } from '../InputField';
import { PasswordInputField } from '../general/InputField';
import { AlertError } from '../general/AlertError';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';

interface ModalAuthProps {
  isOpen: boolean
  onClose: any
  onOpen: any
  view?: number
}

const VIEWS = {
  LOGIN: 1,
  SIGNUP: 2,
  FORGOT_PASSWORD: 3
};

export const ModalAuth: React.FC<ModalAuthProps> = ({ isOpen, onClose, onOpen, view }) => {
  // state
  console.log('View', view);
  
  const [tab, setTab] = useState(view || 1);

  useEffect(() => {
    setTab(view || 1);
  }, [view])
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        { VIEWS.LOGIN === tab && <LoginForm setTab={setTab} onClose={onClose} /> }
        { VIEWS.SIGNUP === tab && <SignupForm setTab={setTab} onClose={onClose} /> }
        { VIEWS.FORGOT_PASSWORD === tab && <ForgotPasswordForm setTab={setTab} onClose={onClose} /> }
      </ModalContent>
    </Modal>
  );
}