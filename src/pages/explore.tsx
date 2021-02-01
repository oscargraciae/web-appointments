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
  console.log('Parametros', query);
  
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
  console.log('Place id', placeId);
  
  const place :string | undefined = placeId?.toString();
  const addressParam = location ? location : undefined;
  const categoryId = cat ? cat : undefined;

  
  return (
    <ExploreProvider placeId={place} addressParam={addressParam} category={categoryId}>
      <Stack isInline>

        <Box w='840px'>
          <ExploreForm />
          {/* <Text>{JSON.stringify(query)}</Text> */}
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