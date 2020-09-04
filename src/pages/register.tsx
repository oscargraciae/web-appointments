import React from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/core';

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

import { useRegisterMutation } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter()
  const [, register] = useRegisterMutation();
    return (
      <Wrapper variant="small">
        <Formik
          initialValues={{username: "", password: "", email: ""}}
          onSubmit={async (values) => {
            const response = await register(values);
            if (response.data?.register.user) {
              router.push('/');
            }
          }}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <InputField name="username" label="Username" placeholder="username" />
              <Box mt={4}>
                <InputField name="email" label="Email" placeholder="email" />
              </Box>
              <Box mt={4}>
                <InputField name="password" label="Password" placeholder="password" type="password" />
              </Box>
              <Button
                mt={4}
                type="submit"
                variantColor="teal"
                isLoading={isSubmitting}
              >
                  Register
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    );
}

export default withUrqlClient(createUrqlClient)(Register);