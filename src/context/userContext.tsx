import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { LoadingView } from '../components/general/LoadingView';
import { UserService } from '../services/userService';
import { IUser } from '../types/IUser';

export const UserContext = React.createContext<any>(null);

export const UserProvider: React.FC = ({ children }) => {
  // hooks
  const router = useRouter();
  
  // state
  const [user, setUser] = useState<IUser>()
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeUser = async () => {
    const response = await new UserService().getMe();
    if (response.success && response.user) {
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
    // router.push('/');
    location.href = '/';
  }

  if(isLoading) {
    return <LoadingView />
  }

  return (
    <UserContext.Provider value={{ user, isLogged, reloadUser, logout }}>
      { children }
    </UserContext.Provider>
  );
}