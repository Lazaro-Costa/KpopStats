import {create} from 'zustand';
import { IUserEntity } from './Interfaces/Interfaces.api';
import { apiBase } from './Components/Helper/Variables';
type ZUser = {
  user: null | IUserEntity;
  error: null | Error;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  autoLogin: () => Promise<void>;
}
export const useUserStore = create<ZUser>((set) => ({
  user: null,
  error: null,
  loading: false,

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const loginResponse = await fetch(`${apiBase}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (!loginResponse.ok) {
        throw new Error('Failed to login');
      }

      // Fetch user details after successful login
      const userResponse = await fetch(`${apiBase}/users/user`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!userResponse.ok) {
        throw new Error('Failed to get user details');
      }

      const user = await userResponse.json();
      set({user});
    } catch (error) {
      if(error instanceof Error){
        set({ error });
      }
    }finally{
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true});
    try {
      const response = await fetch(`${apiBase}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to logout');
      }

      set({ user: null});
    } catch (error) {
      if(error instanceof Error) set({ error });
    }finally{
      set({ loading: false });
    }
  },
  autoLogin: async () => {
    set({ loading: true });
    try {
      const response = await fetch(`${apiBase}/users/user`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to get user details');
      }
      const user = await response.json();
      set({ user });
    } catch (error) {
      if(error instanceof Error) set({ error });
    }finally{
      set({ loading: false });
    }
  }
}));
