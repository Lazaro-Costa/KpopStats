import { IGetCompanys, IGetGroups } from "../../Interfaces/Interfaces.api"

export interface IGetIdolRelated {
  company: Pick<IGetCompanys, 'id' | 'ceo' | 'name' | 'headquarters' | 'pictures'>
  group: Pick<IGetGroups, 'id' | 'name' | 'fandom_name' | 'pictures' | 'idols'>
  solist: boolean
}

export interface IGetCompanyRelated {
  groups: Pick<IGetGroups, 'id' | 'name' | 'fandom_name' | 'pictures' | 'idols'>[]
}
