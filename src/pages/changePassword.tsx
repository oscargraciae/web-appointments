import React, { useState } from 'react'
import { Alert, AlertDescription, Box, Button, Heading, Text, useToast, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';

import { InputField, PasswordInputField } from '../components/InputField';
import { AlertError } from '../components/general/AlertError';
import { Wrapper } from '../components/Wrapper';
import { UserService } from '../services/userService';
import { changePasswordSchemaValidation } from '../validations/changePassword';

interface ChangePasswordProps {
  token: string
}

export const getServerSideProps = async ({ query } : any) => {
  return {
    props: {
      ...query,
    },
  }
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ token }) => {
  const router = useRouter()
  const toast = useToast();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [password, setPassword] = useState('');

  const onSubmit = async (values: any) => {
    if (values.password === values.confirmPassword) {
      const response = await new UserService().changePasword({ token, password: values.password });
      if (response.success) {
        toast({
          status: 'success',
          title: 'Contraseña actualizada',
          position: 'top',
        })
        // setSuccess(true);
        router.push('/');
      } else {
        setError(response.message);
      }
    } else {
      setError('Las contraseñas no coinciden')
    }
  }
  
  const initialState = {
    password: '',
    confirmPassword: '',
  }

  return (
    <Wrapper variant='small'>
      <Box h='100vh'>
        <Heading mb={6}>Cambiar contraseña</Heading>
          <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={changePasswordSchemaValidation}>
            {({ isSubmitting, errors, touched }) => (
            <Form>
              <VStack spacing={4}>
                <PasswordInputField inputSize='lg'  name='password' label='Nueva contraseña' />
                <PasswordInputField inputSize='lg'  name='confirmPassword' label='Confirmar nueva contraseña' />
                <Button mt={40} isLoading={isSubmitting} type='submit' size='lg' variant='primary' isFullWidth>Cambiar mi contraseña</Button>
                { error && <AlertError description={error} /> }
                {/* { success && <Alert status='success'>
                  <AlertDescription>
                    Te hemos enviado un correo con las instrucciones para cambiar tu contraseña.
                    *Si no logras encontrarlo, revisa tu bandeja de spam.
                  </AlertDescription>
                </Alert>
                } */}
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>    
  );
}

export default ChangePassword;