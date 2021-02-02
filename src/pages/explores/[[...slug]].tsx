import React, {  } from 'react'
import { Box, Stack } from '@chakra-ui/react'

// components
import BusinessList from '../../components/explore/BusinessList'
import { ExploreMap } from '../../components/explore/ExploreMap'
import { ExploreProvider } from '../../context/exploreContext'
import { ExploreForm } from '../../components/explore/ExploreForm'
import { useRouter } from 'next/router'
import { urlToString } from '../../utils/stringToUrl'

const Explore: React.FC<{}> = () => {
  const router = useRouter()
  
  const { slug, place, cat } = router.query
  const placeId :string | undefined = place?.toString();

  let addressParam;
  let categoryId;

  if (slug) {
    addressParam = slug ? slug[slug.length - 1] : undefined;
    categoryId = cat ? cat.toString() : undefined;
  }

  return (
    <ExploreProvider placeId={placeId} addressParam={addressParam} category={categoryId}>
      <Stack isInline>
        <Box w='840px'>
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