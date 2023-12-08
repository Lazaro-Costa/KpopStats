import { IGroupRaw } from "../DataMock/DataIdol"

export type IGetEntities = IGetGroups | IGetPic | IGetCompanys | IGroupRaw
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
  profiles: [{id:number, url:string}]
  banners: [{id:number, url:string}]
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
  id: number
  name: string
  companyId?: number
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
  name: string
  fandom_name: string
  companyId: number
  company: IGetCompanys
  createdAt: string
  updatedAt: string
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
  company: Company
  pictures: Pictures
  idols: Idol[]
}

export interface Company {
  id: number
  name: string
}

export interface Pictures {
  id: number
  name: string
  banners: Banner[]
  profiles: Profile[]
}

export interface Banner {
  id: number
  url: string
}

export interface Profile {
  id: number
  url: string
}

export interface Idol {
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
  company: Company
  group: AuxGroupIdol
  pictures: Pictures
}
interface AuxGroupIdol{
  id: number
  name: string
}
export interface Pictures {
  id: number
  name: string
  banners: Banner[]
  profiles: Profile[]
}

export interface Banner {
  id: number
  url: string
}

export interface Profile {
  id: number
  url: string
}
