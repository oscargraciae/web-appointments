import { Box, Heading } from '@chakra-ui/react';
import React from 'react'

export const getServerSideProps = async (props) => {
  
  let response = null;
  
  console.log('Parametros', props.query);
  
  return {
    props: {
      id: 1,
    },
  }
}

const search = ({}) => {
  return (
    <Box>
      <Heading>Buscador</Heading>
    </Box>
  );
}

export default search;