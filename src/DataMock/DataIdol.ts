import { IGetGroups } from "../Interfaces/Interfaces.api"

export function convertToIdol(data: IGetGroups[]) {
  if(data.length === 0) return []
  return data.map((data) => {
    return {
      id: data.id.toString(),
      profile: data.pictures.profiles[0].url,
      group: data.name,
      fandom: data.fandom_name,
      empresa: data.company.name,
      url: data.pictures.profiles[0].url,
      logoUrl: data.pictures.banners[0].url,
      members: data.idols.map((idol) => {
        return {
          id: idol.id.toString(),
          name: idol.name,
          icon: idol.pictures.profiles[0].url,
        }
      }),
    }
  })
}
