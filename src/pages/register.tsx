import React from 'react'
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  
    return (
      <Wrapper variant="small">
        <Formik
          initialValues={{username: "", password: "", email: ""}}
          onSubmit={async (values) => {}}
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

export default Register;