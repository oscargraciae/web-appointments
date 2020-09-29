import React from 'react'
import { Box, Link, Flex, Button } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useMeQuery, useLogoutMutation } from '../generated/graphql';
import { isServer } from '../utils/isServer';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();

  let body = null;

  if (fetching) {
    
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={4}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">register</Link>
        </NextLink>
      </>
    )
  } else {
    body = (
      <Flex>
        <Box>{data.me.username}</Box>
        <Button variant="link" onClick={() => logout()}>logout</Button>
      </Flex>
    )
  }
  return (
    <Flex zIndex={1} position="sticky" top={0} bg='tomato' p={4}>
      <Box ml={'auto'}>
        {body}
      </Box>
    </Flex>
  );
}