import React, { useEffect, useState } from 'react';
import { LoadingView } from '../components/general/LoadingView';
import { UserService } from '../services/userService';
import { IUser } from '../types/IUser';

export const UserContext = React.createContext<any>(null);

export const UserProvider: React.FC = ({ children }) => {
  // state
  const [user, setUser] = useState<IUser>()
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const fetchMeUser = async () => {
    const response = await new UserService().getMe();
    if (response.success && response.user) {
      console.log('Usuario cargado', response);
      
      setUser(response.user);
      setIsLogged(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMeUser();
  }, []);

  const reloadUser = () => {
    fetchMeUser();
  }

  const logout = async () => {
    await new UserService().logout();
    fetchMeUser();
    location.href = '/';
  }

  // if(isLoading) {
  //   return <LoadingView />
  // }

  return (
    <UserContext.Provider value={{
      user,
      isLogged,
      reloadUser,
      logout,
      setOpenModalLogin,
      openModalLogin,
    }}>
      { children }
    </UserContext.Provider>
  );
}