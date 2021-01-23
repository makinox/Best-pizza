import React, {createContext, useState, useEffect} from 'react';
import {UserI} from '../interfaces/User';

export const ARMcontext = createContext({
  user: {} as UserI,
  HandleUser: (user: UserI) => {},
  HandleSignOut: () => {},
});

export const ARMprovider = ({children}: {children: any}) => {
  const [user, setUser] = useState<UserI>({});

  function HandleUser(param: UserI): void {
    setUser(param);
    localStorage.setItem('user', JSON.stringify(param));
  }

  function CheckStorageState(): void {
    try {
      const userResult = localStorage.getItem('user');
      if (userResult !== null) {
        setUser(JSON.parse(userResult));
      }
    } catch (error) {
      return console.error({error: true, message: error});
    }
  }

  function HandleSignOut(): void {
    localStorage.removeItem('user');
    setUser({});
  }

  useEffect(CheckStorageState, []);

  return (
    <ARMcontext.Provider
      value={{
        user,
        HandleUser,
        HandleSignOut,
      }}>
      {children}
    </ARMcontext.Provider>
  );
};
