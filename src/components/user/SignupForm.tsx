import React, { useContext, useState } from 'react'
import { Box, Button, Divider, HStack, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { InputField, InputNumberField, PasswordInputField } from '../InputField';
import { AlertError } from '../general/AlertError';
import { UserService } from '../../services/userService';
import { IUser } from '../../types/IUser';
import { UserContext } from '../../context/userContext';
import { SignupSchemaValidation } from '../../validations/signup';

interface SignupFormProps {
  setTab: any
  onClose: any
}

export const SignupForm: React.FC<SignupFormProps> = ({ setTab, onClose }) => {
  // context
  const { reloadUser } = useContext(UserContext);
  // state
  const [error, setError] = useState('');

  const onSubmit = async (values :IUser) => {
    const response = await new UserService().signup(values);
    if (response.success) {
      reloadUser();
      onClose();
    } else {
      if (response.message) {
        setError(response.message);
      }
    }
  }

  const initalState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  };

  return (
    <>
      <ModalHeader>Regístrate</ModalHeader>
        <ModalBody>
          <Formik initialValues={initalState} onSubmit={onSubmit} validationSchema={SignupSchemaValidation}>
          {({ isSubmitting, errors, touched }) => (
          <Form>
            <VStack spacing={4}>
              <HStack>
                <InputField name='firstName' label='Nombre' />
                <InputField name='lastName' label='Apellido' />
              </HStack>
              <InputNumberField name='phone' label='Número telefónico' />
              <InputField name='email' label='Correo eletrónico' />
              
              <PasswordInputField size='lg'  name='password' label='Contraseña' />
              <Button mt={40} isLoading={isSubmitting} type='submit' size='lg' variant='primary' isFullWidth>Regístrate</Button>
              { error && <AlertError description={error} /> }

              <Divider orientation='horizontal' my={4} />
              <Text mb={2}>¿Ya tienes una cuenta?{" "}
                <Link color='primary' fontWeight='bold' onClick={() => setTab(1)}>Iniciar sesión</Link>
              </Text>
            </VStack>
          </Form>
        )}
      </Formik>
    </ModalBody>
    </>
  );
}