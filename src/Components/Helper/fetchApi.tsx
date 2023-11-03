import { profiles } from "../../DataMock/DataIdol"

export const fetchApi = (uri: string) => {
  const profile = profiles.find(profile => profile.profile === uri);
  return profile;
}
