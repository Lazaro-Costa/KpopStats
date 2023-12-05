import { create } from "zustand";
import { IGroupCard } from "../DataMock/DataIdol";

type IGroup = {
  group: IGroupCard | null
  setGroup: (group: IGroupCard | null) => void
}
export const useGroup = create<IGroup>((set) => ({
  group: null,
  setGroup: (group) => set({ group }),
}))
