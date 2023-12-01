import {create} from 'zustand';

type Idol = {
  id: string;
  name: string;
  icon: string;
}

type useIdols = {
  idols: Idol[];
  setIdols: (idols: Idol[]) => void;
}

export const useIdolsCard = create<useIdols>(set => ({
  idols: [],
  setIdols: (idols) => set({idols}),
}));
