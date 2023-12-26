export type IGetEntities =  IGetGroups | IGetPic | IGetCompanys | IGetIdol;
export interface ICreatePic{
  name: string
  urls_profile?: string[]
  urls_banner?: string[]
}
export interface IGetPic{
    id: number
    createdAt: string
    updatedAt: string
    name: string
    profiles: Profile[]
    banners: Banner[]
  }

  export interface Profile {
    id: number
    url: string
  }

  export interface Banner {
    id: number
    url: string
  }

export interface ICreateBanner{
  picId: number
  url: string[]
}
export interface ICreateProfile{
  picId: number
  url: string[]
}
export interface ICreateCompany{
  name: string
  founding_date?: string | null | Date
  headquarters?: string | null
  ceo?: string | null
  more_info?: string | null
  picsId?: number | null | string
  urls_banner?: ICreateBanner['url']
  urls_profile?: ICreateProfile['url']
}
export interface IGetCompanys{
  name: string
  id: number
  ceo: string
  headquarters: string
  founding_date: string
  more_info: string
  picsId: number
  pictures: IGetPic
}
export interface ICreateGroup{
  id?:number
  name: string
  companyId: number | null | string
  fandom_name?: string | null
  debut_date?: string | null
  more_info?: string | null
  picsId?: number | null | string
  urls_banner?: ICreateBanner['url']
  urls_profile?: ICreateProfile['url']
}
export interface IGetGroupsBKP{
  id: number
  createdAt: string
  updatedAt: string
  name: string
  fandom_name: string
  debut_date: string
  more_info: string
  companyId: number
  picsId: number
  company: Pick<IGetCompanys, 'id' | 'name'>
  pictures: IGetPic
  idols: IGetIdol[]
}
export interface ICreateIdol{
  name: string
  companyId: string | number
  solist: string | boolean
  korean_name?: string | null
  foreign_name?: string | null
  nationality?: string | null
  date_birth?: string | null
  more_info?: string | null
  groupId?: number | string | null
  picsId?: string | null
  urls_banner?: ICreateBanner['url']
  urls_profile?: ICreateProfile['url']
}

export interface InfoGroups {
  Name: string
  "Fandom Name": string
  Debut: string
  Company: string
}

export interface IGetGroups {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  fandom_name: string
  debut_date: string
  more_info: string
  companyId: number
  picsId: number
  company: Pick<IGetCompanys, 'id' | 'name'>
  pictures: IGetPic
  idols: IGetIdol[]
}

export interface IGetIdol {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  korean_name: string
  foreign_name: string
  nationality: string
  date_birth: string
  solist: boolean
  more_info: string
  companyId: number
  groupId: number
  picsId: number
  company: Pick<IGetCompanys, 'id' | 'name'>
  group: Pick<IGetGroups, 'id' | 'name'>
  pictures: IGetPic
}
export interface Root {
  id: number
  createdAt: string
  updatedAt: string
  username: string
}
export interface IUserEntity {
  id: number
  createdAt: string
  updatedAt: string
  username: string
}
