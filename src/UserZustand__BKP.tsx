import {create} from 'zustand';
import { IUserEntity } from './Interfaces/Interfaces.api';
import { apiBase } from './Components/Helper/Variables';

export interface IUserStore {
  data: IUserEntity | null;
  error: Error | boolean;
  ctxLoading: boolean;
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  getLogin: () => Promise<void>; // Definindo a função getLogin
  userName: () => string;
}

export const useUserStore = create<IUserStore>((set) => ({
  data: null,
  error: false,
  ctxLoading: false,

  getLogin: async () => {
    try {
      set({ error: false, ctxLoading: true });
      const response = await fetch(`${apiBase}/users/user`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) return;
      set({ data: await response.json() });
    } catch (error) {
      if (error instanceof Error) set({ error });
      return;
    }finally{
      set({ ctxLoading: false });
    }
  },

userLogin: async (username: string, password: string) => {
  try {
    set({ error: false, ctxLoading: true });
    const response = await fetch(`${apiBase}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    if(!response.ok) return;
    useUserStore.getLogin();
  } catch (error) {
    if (error instanceof Error) {
      set({ error });
    }
    console.error(error);
  }finally{
    set({ ctxLoading: false });
  }
},

  userLogout: async () => {
    try {
      set({ error: false, ctxLoading: true });
      const response = await fetch(`${apiBase}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      if(!response.ok) return;
      console.log(response.ok ? 'Logout realizado com sucesso' : 'Logout falhou');
      set({ data: null, ctxLoading: false });
    } catch (error) {
      if (error instanceof Error) set({ error });
      console.error(error);
    }finally{
      set({ ctxLoading: false });
    }
  },
  userName: () => useUserStore.getState().data?.username || 'Não carregado',
}));
