import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Progress, Select, Text } from '@chakra-ui/react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { ExploreContext } from '../../context/exploreContext';
import { CategoryService } from '../../services/categoryService';
import { BiChevronDown } from 'react-icons/bi';

interface ExploreFormProps {}

export const ExploreForm: React.FC<ExploreFormProps> = ({}) => {
  // context
  const { setCoords, setCenterMapCoords, addressMap, setCategoryId, categoryId } = useContext(ExploreContext);
  // states
  const [geoAddress, setGeoAddress] = useState<string>(addressMap ? addressMap : '');
  const [categories, setCategories] = useState([]);
  const [nameCategory, setNameCategory] = useState('Tipo de servicio');
  // const { changeLocation } = useGoogleMaps({ coords, setCoords });

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await new CategoryService().getAll();
      console.log('Respuesta cateogirws', categories);
      setCategories(categories);
    }

    fetchCategories();
  }, [])

  useEffect(() => {
    console.log('categoryId', categoryId);
    
    const cat = categories.filter(item => item.id == categoryId)[0];
    console.log('Categoria effect', cat);
    
      if (cat) {
        setNameCategory(cat.name);
        setCategoryId(Number(cat.id));
      }
  }, [categories, categoryId])

  const handleSelect = async (address: string) => {
    const results = await geocodeByAddress(address)
    const latLng = await getLatLng(results[0]);
    // changeLocation(latLng)
    setCenterMapCoords(latLng);
    setCoords(latLng);
    setGeoAddress(address);
  }

  const handleCategory = (value :any) => {
    console.log('Categoria valor', value);
    if (value != '0') {
      const cat = categories.filter(item => item.id == value)[0];
      if (cat) {
        setNameCategory(cat.name);
        setCategoryId(Number(cat.id));
      }
    } else {
      setNameCategory('Tipo de servicio');
      setCategoryId(null);
    }
    
  }

  return (
    <Flex direction='column' pt={2} px={4} >
      <Flex direction="row" align='center' justify='flex-start'>
        <Heading as="h2" fontSize='md' pr={2}>Resultados en</Heading>
        <PlacesAutocomplete
            value={geoAddress}
            onChange={(geoaddress) => setGeoAddress(geoaddress)}
            onSelect={handleSelect}
            searchOptions={{ componentRestrictions: { country: ['mx'] } }}
          >
            { (({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <Box w="70%">
                  <Input {...getInputProps()} placeholder='Dirección ' color='primary' size='md' variant="flushed-app" my={4} borderBottomColor='#DDD' fontWeight='semibold' pt='3px' border='0px' _hover={{ borderBottomWidth: 4, cursor: 'pointer' }} />
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
      {/* <Select placeholder="Tipo de servicio" w='230px'>
        { categories.map((item :any, index :number) => (
          <option value="option1" key={index}>{item.name}</option>
        )) }
      </Select> */}
      <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />} w='230px'>
          {nameCategory}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup defaultValue={String(categoryId)} type="radio" onChange={handleCategory}>
            <MenuItemOption value='0'>
              Todos
            </MenuItemOption>
            { categories.map((item :any, index :number) => (
              <MenuItemOption
                key={item.id}
                value={String(item.id)}
              >
                {item.name}
              </MenuItemOption>
            )) }
            
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}