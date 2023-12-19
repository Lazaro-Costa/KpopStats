import React from 'react';
import { apiBase } from './Components/Helper/Variables';
import { IUserEntity } from './Interfaces/Interfaces.api';

export const UserContext = React.createContext({});
export const UserStorage = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<IUserEntity | null>(null);
  const [ctxLoading, setCtxLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null | boolean>(null);
  // const [login, setLogin] = React.useState(null);

  async function getLogin() {
    try {
      const response = await fetch(`${apiBase}/users/user`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      if(error instanceof Error) setError(error);
      console.log(error);
    }
  }
  async function userLogin(username: string, password: string) {
    try {
      setError(false);
      setCtxLoading(true);
      const response = await fetch(`${apiBase}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      getLogin();
    } catch (error) {
      if(error instanceof Error) setError(error);
      console.log(error);
    }finally{
      setCtxLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ data, ctxLoading, error, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
