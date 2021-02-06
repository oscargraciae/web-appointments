import React, { useContext, useState } from 'react'
import { Box, Button, Divider, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { InputField, PasswordInputField } from '../InputField';
import { AlertError } from '../general/AlertError';
import { LoginSchemaValidation } from '../../validations/login';
import { UserService } from '../../services/userService';
import { IUser } from '../../types/IUser';
import { UserContext } from '../../context/userContext';

interface LoginFormProps {
  setTab: any
  onClose: any
}

export const LoginForm: React.FC<LoginFormProps> = ({ setTab, onClose }) => {
  // context
  const { reloadUser } = useContext(UserContext);
  // state
  const [error, setError] = useState('');

  const onSubmit = async (values :IUser) => {
    const response = await new UserService().login(values);
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
    password: ''
  };

  return (
    <>
      <ModalHeader>Inicia sesión</ModalHeader>
        <ModalBody>
          <Formik initialValues={initalState} validationSchema={LoginSchemaValidation} onSubmit={onSubmit}>
          {({ isSubmitting, errors, touched }) => (
          <Form>
            <VStack spacing={4}>
              {/* <InputField name='firstName' label='Nombre' />
              <InputField name='lastName' label='Apellido' /> */}
              <InputField inputSize='lg' name='email' label='Correo eletrónico' />
              <PasswordInputField inputSize='lg'  name='password' label='Contraseña' />
              <Button mt={40} isLoading={isSubmitting} type='submit' size='lg' variant='primary' isFullWidth>Iniciar sesión</Button>
              <Button alignSelf='flex-end' textAlign='right' size='sm' variant='link' onClick={() => setTab(3)}>¿Olvidaste tu contraseña?</Button>
              { error && <AlertError description={error} /> }

              <Divider orientation='horizontal' my={4} />
              <Text mb={2}>¿No tienes cuenta?{" "}
                <Link color='primary' fontWeight='bold' onClick={() => setTab(2)}>Registrate</Link>
              </Text>
            </VStack>
          </Form>
        )}
      </Formik>
    </ModalBody>
    </>
  );
}