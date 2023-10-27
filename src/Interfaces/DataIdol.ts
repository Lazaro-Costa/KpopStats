type IdolIcon ={
  id: string,
  name: string,
  icon: string
}
export interface IDataIdol {
  id: string;
  group: string;
  fandom: string;
  empresa: string;
  url: string;
  logoUrl: string;
  members: IdolIcon[];
}
