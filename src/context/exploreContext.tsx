import React, { useContext, useState, useEffect } from 'react';
import { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

import { BusinessServices } from '../components/business/BusinessServices';
import { LoadingView } from '../components/general/LoadingView';
import { BusinessService } from '../services/businessService';
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
  console.log('category', category);
  
  const [businesses, setBusinesses] = useState<IBusiness[]>([]);
  const [coords, setCoords] = useState<any>(null);
  const [centerMapCoords, setCenterMapCoords] = useState<any>(null);
  const [addressMap, setAddressMap] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(category ? category : null);
  // const { socket } = useContext(SocketContext);

  // useEffect(() => {
  //   socket?.emit('hola', coords);
  //   socket.on('listado', (businesses: IBusiness[]) => {
  //     console.log('data', businesses);   
  //     setBusinesses(businesses);
  //     // setIsLoading(false)
  //   })
  //   setIsLoading(false);
  // }, [coords])

  const getCoords = async () => {    
    if (placeId) {
      const results = await geocodeByPlaceId(placeId);
      const latLng = await getLatLng(results[0]);
      
      setCoords(latLng)
      setCenterMapCoords(latLng);
      if (addressParam) {
        const strAddress = urlToString(addressParam);
        setAddressMap(strAddress);
      }
    } else {
      setCoords({ lat: 25.6866142, lng: -100.3161126 });
      setCenterMapCoords({ lat: 25.6866142, lng: -100.3161126 });
      setAddressMap('Centro, Monterrey, N.L., México');
    }
  }


  const fetch = async () => {
    if (coords) {
      const { success, business } = await new BusinessService().get({...coords, categoryId});
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
  }

  return (
    <ExploreContext.Provider value={initialState}>
      { children }
    </ExploreContext.Provider>
  );
}