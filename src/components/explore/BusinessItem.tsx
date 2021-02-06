import React from 'react'
import { Box, HStack, Image, Link, Progress, Stack, Text } from '@chakra-ui/react';
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
        <Box mb={3} py={2} pl={2} w='100%' _hover={{ bg: 'primaryLight', cursor: 'pointer' }}>
          <Stack isInline justify='flex-start' align='center'>
            <Image borderRadius="md" src={business.cover} boxSize='120px' w='180px' objectFit="cover" fallback={<Progress />} loading='lazy' />
            <Box pl={3}>
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {business.name}
              </Text>
              <Text
                my={2}
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="primary"
              >
              {business.businessCategory?.name}
              </Text>
              <Text fontSize="xs" color='grey'>{business.businessAddress?.addressMap}</Text>
              {/* <HStack pt={2} spacing={1}>
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
                <AiFillStar color='gold' />
              </HStack> */}
            </Box>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
}