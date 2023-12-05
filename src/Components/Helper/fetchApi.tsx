import { IGetGroups } from "../../Interfaces/Interfaces.api"

export const fetchApi = async (uri: string): Promise<IGetGroups> => {
  return fetch(`http://localhost:3000/groups/${uri}`)
  .then(res => res.json()).then(data => {
    return data
  })
}
