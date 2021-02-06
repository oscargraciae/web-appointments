import { Alert, AlertDescription, Button, Divider, Link, ModalBody, ModalHeader, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext';
import { UserService } from '../../services/userService';
import { IUser } from '../../types/IUser';
import { forgotSchemaValidation } from '../../validations/forgotPassword';
import { AlertError } from '../general/AlertError';
import { InputField } from '../InputField';

interface ForgotPasswordFormProps {
  setTab: any
  onClose: any
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ setTab, onClose }) => {
  // state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = async (values :IUser) => {
    if (values.email) {
      const response = await new UserService().forgotPasword(values);
      if (response.success) {
        setSuccess(true);
        // reloadUser();
        // onClose();
      } else {
        if (response.message) {
          setError(response.message);
        }
      }
    }
  }

  const initalState = {
    email: '',
  };

  return (
    <>
      <ModalHeader>Restablece tu contraseña</ModalHeader>
        <ModalBody>
          <Text mb={3}>Te enviaremos un enlace a tu correo para que puedas cambiar la contraseña</Text>
          <Formik initialValues={initalState} onSubmit={onSubmit} validationSchema={forgotSchemaValidation}>
          {({ isSubmitting, errors, touched }) => (
          <Form>
            <VStack spacing={4}>
              <InputField inputSize='lg' name='email' label='Correo eletrónico' />
              <Button mt={40} isLoading={isSubmitting} type='submit' size='lg' variant='primary' isFullWidth>Cambiar mi contraseña</Button>
              <Button alignSelf='flex-end' textAlign='right' size='sm' variant='link' onClick={() => setTab(1)}>Regresar a iniciar sesión</Button>
              { error && <AlertError description={error} /> }
              { success && <Alert status='success'>
                <AlertDescription>
                  Te hemos enviado un correo con las instrucciones para cambiar tu contraseña.
                  *Si no logras encontrarlo, revisa tu bandeja de spam.
                </AlertDescription>
              </Alert>
              }
            
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