import React, { useEffect, useState } from 'react';
import { LoadingView } from '../components/general/LoadingView';
import { UserService } from '../services/userService';
import { IUser } from '../types/IUser';

export const UserContext = React.createContext<any>(null);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>()
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Cargando usuario');
    
    const fetchMeUser = async () => {
      const response = await new UserService().getMe();
      if (response.success && response.user) {
        setUser(response.user);
        setIsLogged(true);
      }
      setIsLoading(false);
    }
    fetchMeUser();
  }, []);

  if(isLoading) {
    return <LoadingView />
  }

  return (
    <UserContext.Provider value={{ user, isLogged }}>
      { children }
    </UserContext.Provider>
  );
}