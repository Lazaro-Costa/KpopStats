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
export interface IGetGroups{
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

