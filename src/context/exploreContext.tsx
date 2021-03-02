import React, { useContext, useState, useEffect } from 'react';
import { geocodeByPlaceId, getLatLng, geocodeByAddress } from 'react-places-autocomplete';

import { BusinessServices } from '../components/business/BusinessServices';
import { LoadingView } from '../components/general/LoadingView';
import { BusinessService } from '../services/businessService';
import { CategoryService } from '../services/categoryService';
import { IBusiness } from '../types/IBusiness';
import { urlToString } from '../utils/stringToUrl';
import { SocketContext } from './socketContext';

export const ExploreContext = React.createContext<any>(null);

interface ExploreProviderProps {
  placeId?: string
  addressParam?: string
  category?: string
}

export const ExploreProvider: React.FC<ExploreProviderProps> = ({ children, placeId, addressParam, category }) => {
  // states
  const [businesses, setBusinesses] = useState<IBusiness[]>([]);
  const [coords, setCoords] = useState<any>(null);
  const [zoom, setZoom] = useState(14);
  const [centerMapCoords, setCenterMapCoords] = useState<any>(null);
  const [addressMap, setAddressMap] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState();
  const [itemSelected, setItemSelected] = useState(null);

  const getCoords = async () => {    
    if (placeId) {
      
      const results : google.maps.GeocoderResult[] = await geocodeByPlaceId(placeId);
      const latLng = await getLatLng(results[0]);
      setCoords(latLng)
      setCenterMapCoords(latLng);
      setAddressMap(results[0].formatted_address);

    } else if(addressParam) {
      const newAddress : google.maps.GeocoderResult[] = await geocodeByAddress(urlToString(addressParam));
      const latLng = await getLatLng(newAddress[0]);
      
      setAddressMap(newAddress[0].formatted_address);
      setCoords(latLng)
      setCenterMapCoords(latLng);
    } 
    else {
      setCoords({ lat: 25.6866142, lng: -100.3161126 });
      setCenterMapCoords({ lat: 25.6866142, lng: -100.3161126 });
      setAddressMap('Centro, Monterrey, N.L., México');
    }

  }

  const getCategory = () => {
    const fetchCategories = async () => {
      const { categories } = await new CategoryService().getAll();
      if (category) {
        const currCategory = categories.filter((item : any) => item.name === category)[0];
        if (currCategory) {
          setCategoryId(currCategory.id);
        }
      }
    }
    fetchCategories();
  }


  const fetch = async () => {
    if (coords) {
      const { success, business } = await new BusinessService().get({...coords, categoryId, zoom});
      if (success && business) {
        setBusinesses(business);  
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCoords();
  }, [])

  useEffect(() => {
    getCategory();
  }, [])

  useEffect(() => {
    fetch()
  }, [coords, categoryId])

  if (isLoading || !coords) {
    return <LoadingView />
  }

  const initialState = {
    coords,
    setCoords,
    businesses,
    setBusinesses,
    isLoading,
    centerMapCoords,
    setCenterMapCoords,
    addressMap,
    setCategoryId,
    categoryId,
    setZoom,
    zoom,
    itemSelected,
    setItemSelected,
  }

  return (
    <ExploreContext.Provider value={initialState}>
      { children }
    </ExploreContext.Provider>
  );
}