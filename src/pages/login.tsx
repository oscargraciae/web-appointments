import React from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/core';

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

import { useRegisterMutation, useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Login: React.FC<{}> = ({}) => {
  const router = useRouter()
  const [, register] = useLoginMutation();
    return (
      <Wrapper variant="small">
        <Formik
          initialValues={{username: "", password: ""}}
          onSubmit={async (values, { setErrors }) => {
            const response = await register(values);
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              router.push("/");
            }
          }}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <InputField name="username" label="Username" placeholder="username" />
              <Box mt={4}>
                <InputField name="password" label="Password" placeholder="password" type="password" />
              </Box>
              <Button
                mt={4}
                type="submit"
                variantColor="teal"
                isLoading={isSubmitting}
              >
                  Login
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    );
}

export default withUrqlClient(createUrqlClient)(Login);