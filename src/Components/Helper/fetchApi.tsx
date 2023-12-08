import { IGetGroups } from "../../Interfaces/Interfaces.api"
import { apiBase } from "./Variables"

export const fetchApi = async (uri: string): Promise<IGetGroups> => {
  return fetch(`${apiBase}/groups/${uri}`)
  .then(res => res.json()).then(data => {
    return data
  })
}
