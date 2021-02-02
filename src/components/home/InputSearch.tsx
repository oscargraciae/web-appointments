import React, { useState } from 'react'
import { Button, Input, Stack, Box, Progress, Text } from '@chakra-ui/react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useRouter } from 'next/router';
import { stringToUrl } from '../../utils/stringToUrl';

interface InputSearchProps {

}

export const InputSearch: React.FC<InputSearchProps> = ({}) => {
  // hooks
  const router = useRouter();
  // states
  const [geoAddress, setGeoAddress] = useState<string>('');
  const [geoAddressSelected, setGeoAddressSelected] = useState<string>('');
  const [placeId, setPlaceId] = useState<string>('');

  // const { changeLocation } = useGoogleMaps({ coords, setCoords });

  const handleSelect = async (address: string) => {
    const results : google.maps.GeocoderResult[] = await geocodeByAddress(address);
    
    if (results) {
      setPlaceId(results[0].place_id);
    }
    
    setGeoAddress(address);
    setGeoAddressSelected(address);
    
  }

  const onSubmit = (e :any) :any => {
    e.preventDefault();
    
    router.push(`/explore/todo/${stringToUrl(geoAddressSelected)}?placeId=${placeId}`)
  }

  return (
    <form onSubmit={onSubmit}>
    <Stack mt={0} isInline bg='#FFF' px={2} py={2} boxShadow='0px 5px 10px rgba(0,0,0,.08)' borderRadius={6}>
      {/* <Input placeholder="Ubicación" size="lg" border='0px' fontWeight='600' /> */}
      
      <PlacesAutocomplete
          value={geoAddress}
          onChange={(geoaddress) => {
            setGeoAddress(geoaddress)
            setGeoAddressSelected('');
          }}
          onSelect={handleSelect}
          searchOptions={{ componentRestrictions: { country: ['mx'] } }}
        >
          { (({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <Box w="100%">
                {/* <Input {...getInputProps()} placeholder='Dirección ' size='lg' variant="flushed" my={4} fontSize='xl' borderBottomColor='#DDD' fontWeight='semibold' pt='9px' /> */}
                <Input {...getInputProps()} placeholder="Ubicación" size="lg" border='0px' fontWeight='600' /> 
                <Box shadow='md' background='#FFFFFF' zIndex={10} pos="absolute" _hover={{ cursor: 'pointer' }}>
                  { loading && <Progress size="xs" isIndeterminate colorScheme='green' /> }
                  {suggestions.map((suggestion, index :number) => (
                    <Box {...getSuggestionItemProps(suggestion)} textAlign='left' px={6} py={4} _hover={{ background: 'primaryLight' }}>
                      <Text>{suggestion.description}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
          )) }
        </PlacesAutocomplete>
      <Button
        variant='primary'
        size="lg"
        isDisabled={(!geoAddressSelected && !placeId)}
        type='submit'
      >
        Buscar
      </Button>
    </Stack>
    </form>
  );
}