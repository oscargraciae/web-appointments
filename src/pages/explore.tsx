import React, {  } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

// components
import BusinessList from '../components/explore/BusinessList'
import { ExploreMap } from '../components/explore/ExploreMap'
import { ExploreProvider } from '../context/exploreContext'
import { ExploreForm } from '../components/explore/ExploreForm'
import { useRouter } from 'next/router'
import { urlToString } from '../utils/stringToUrl'

export const getServerSideProps = async ({ query } : any) => {
  return {
    props: {
      ...query,
    },
  }
}

interface ExploreProps {
  query: any
  category: string
  location: string,
  cat: string
  placeId: string
}

const Explore: React.FC<ExploreProps> = ({ location, category, placeId, cat }) => {
  return (
    <ExploreProvider placeId={placeId} addressParam={location} category={category}>
      <Stack isInline>
        <Box w={{ base: '100%', md: '840px' }}>
          <ExploreForm />
          <BusinessList />
        </Box>
        <Box w='55%' display={{ base: 'none', md: 'block' }}>
          <ExploreMap />
        </Box>
      </Stack>
    </ExploreProvider>
  );
}

export default Explore;