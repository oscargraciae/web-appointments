import React, { useContext, useState, useEffect } from 'react';
import { IBusiness } from '../types/IBusiness';
import { SocketContext } from './socketContext';

export const ExploreContext = React.createContext<any>(null);

export const ExploreProvider: React.FC = ({ children }) => {
  const [businesses, setBusinesses] = useState<IBusiness[]>([]);
  const [coords, setCoords] = useState<any>({ lat: 25.6866142, lng: -100.3161126 });
  const [centerMapCoords, setCenterMapCoords] = useState<any>({ lat: 25.6866142, lng: -100.3161126 });
  const [isLoading, setIsLoading] = useState(true);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.emit('hola', coords);
    socket.on('listado', (businesses: IBusiness[]) => {
      console.log('data', businesses);   
      setBusinesses(businesses);
      // setIsLoading(false)
    })
    setIsLoading(false);
  }, [coords])

  const initialState = {
    coords,
    setCoords,
    businesses,
    setBusinesses,
    isLoading,
    centerMapCoords,
    setCenterMapCoords
  }

  return (
    <ExploreContext.Provider value={initialState}>
      { children }
    </ExploreContext.Provider>
  );
}