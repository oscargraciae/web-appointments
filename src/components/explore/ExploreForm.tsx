import React, { useContext, useState } from 'react'
import { Box, Flex, Heading, Input, Progress, Text } from '@chakra-ui/react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { ExploreContext } from '../../context/exploreContext';

interface ExploreFormProps {}

export const ExploreForm: React.FC<ExploreFormProps> = ({}) => {
  // context
  const { setCoords, setCenterMapCoords } = useContext(ExploreContext);
  // states
  const [geoAddress, setGeoAddress] = useState<string>('');

  // const { changeLocation } = useGoogleMaps({ coords, setCoords });

  const handleSelect = async (address: string) => {
    const results = await geocodeByAddress(address)
    const latLng = await getLatLng(results[0]);
    // changeLocation(latLng)
    setCenterMapCoords(latLng);
    setCoords(latLng);
    setGeoAddress(address);
  }

  return (
    <Flex direction="row" pt={2} px={4} align='center' justify='flex-start'>
      <Heading as="h2" fontSize='2xl' pr={2}>Resultados en</Heading>
      <PlacesAutocomplete
          value={geoAddress}
          onChange={(geoaddress) => setGeoAddress(geoaddress)}
          onSelect={handleSelect}
          searchOptions={{ componentRestrictions: { country: ['mx'] } }}
        >
          { (({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <Box w="70%">
                <Input {...getInputProps()} placeholder='Dirección ' size='lg' variant="flushed" my={4} fontSize='xl' borderBottomColor='#DDD' fontWeight='semibold' pt='9px' />
                <Box shadow='md' background='#FFFFFF' zIndex={10} pos="absolute" >
                  { loading && <Progress size="xs" isIndeterminate colorScheme='green' /> }
                  {suggestions.map(suggestion => {
                    return (
                      <Box {...getSuggestionItemProps(suggestion, { key: suggestion.id })} textAlign='left' px={6} py={4}>
                        <Text>{suggestion.description}</Text>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
          )) }
        </PlacesAutocomplete>
    </Flex>
  );
}