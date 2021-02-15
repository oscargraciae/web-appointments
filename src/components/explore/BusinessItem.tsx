import React from 'react'
import { Box, HStack, Image, Link, Progress, Stack, Text, Flex } from '@chakra-ui/react';
import NextLink from 'next/link'
import { AiFillStar } from 'react-icons/ai';

import { IBusiness } from '../../types/IBusiness';
import { generateName } from '../../utils/generateName';


interface BusinessItemProps {
  business: IBusiness
}

export const BusinessItem: React.FC<BusinessItemProps> = ({ business }) => {
  return (
    <NextLink href={`/b/${generateName(business.name)}/${business.id}`} passHref>
      <Link _hover={{ textDecor: 'none' }} >
        <Flex mb={3} py={2} pl={2} w='100%' _hover={{ bg: 'primaryLight', cursor: 'pointer' }} bg='surface'>
          <Flex justify='flex-start' align='center' flex={1} isTruncated>
            <Box w='180px'>
              <Image borderRadius="md" src={business.cover} w='180px' h='120px' htmlWidth='180px' htmlHeight='120px' objectFit="cover" fallback={<Progress />} loading='lazy' />
            </Box>
            <Box pl={3} w='calc(100% - 180px)'>
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {business.name}
              </Text>
              <Text
                my={2}
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="accent"
              >
              {business.businessCategory?.name}
              </Text>
              <Text fontSize="xs" color='grey' isTruncated>{business.businessAddress?.addressMap}</Text>
              {/* <HStack pt={2} spacing={1}>
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
              </HStack> */}
            </Box>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
}