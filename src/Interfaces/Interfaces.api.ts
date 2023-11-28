export interface ICreatePic{
  name: string
  urls_profile?: string[]
  urls_banner?: string[]
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
  founding_date?: string | null
  headquarters?: string | null
  ceo?: string | null
  moreInfo?: string | null
  picsId?: number | null | string
  urls_banner?: ICreateBanner['url']
  urls_profile?: ICreateProfile['url']
}
export interface ICreateGroup{
  name: string
  companyId: number | null | string
  fandom_name?: string | null
  debut_date?: string | null
  moreInfo?: string | null
  picsId?: number | null | string
  urls_banner?: ICreateBanner['url']
  urls_profile?: ICreateProfile['url']
}
export interface ICreateIdol{
  name: string
  companyId: string
  solist: string
  korean_name?: string | null
  foreign_name?: string | null
  nationality?: string | null
  date_birth?: string | null
  moreInfo?: string | null
  groupId?: number | string | null
  picsId?: string | null
  urls_banner?: ICreateBanner['url']
  urls_profile?: ICreateProfile['url']
}


