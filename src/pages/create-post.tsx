import { Box, Button } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import router from 'next/router';
import React from 'react';

import { InputField } from '../components/InputField';
import { Layout } from '../components/Layout';
import { useCreatePostMutation } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';


const CreatePost: React.FC<{}> = ({}) => {
  const [, createPost] = useCreatePostMutation();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{title: "", text: ""}}
        onSubmit={async (values) => {
          console.log("Values------>", values);
          const {error} = await createPost(values);
          console.log('Error', error);
          if (error) {
            router.push('/login');
          } else {
            router.push('/');
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField name="title" label="Title" placeholder="Title" />
            </Box>
            <Box mt={4}>
              <InputField name="text" label="Body" placeholder="text..." />
            </Box>
            <Button
              mt={4}
              type="submit"
              variantColor="teal"
              isLoading={isSubmitting}
            >
                Create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default withUrqlClient(createUrqlClient)(CreatePost);