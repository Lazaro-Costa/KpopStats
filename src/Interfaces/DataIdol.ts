type IdolIcon ={
  id: string,
  name: string,
  icon: string
}
export interface IDataIdol {
  id: string;
  profile: string,
  group: string;
  fandom: string;
  empresa: string;
  url: string;
  logoUrl: string;
  members: IdolIcon[];
}
export interface ArtistInfo {
  id: string,
  profile: string,
  url: string,
  info: {
    [key: string]: string
  }
}
