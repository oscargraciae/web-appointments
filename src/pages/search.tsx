import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

export const getServerSideProps = async (props) => {
  
  let response = null;
  
  console.log('Parametros', props.query);
  
  return {
    props: {
      id: 1,
      data: props.query,
    },
  }
}

const search = (props) => {
  return (
    <Box>
      <Heading>Buscador</Heading>
      <Text>{JSON.stringify(props)}</Text>
    </Box>
  );
}

export default search;