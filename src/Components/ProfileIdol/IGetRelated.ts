export interface IGetRelated {
  company: Company
  group: Group
  solist: boolean
}

export interface Company {
  id: number
  name: string
  ceo: string
  headquarters: string
  pictures: Pictures
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

export interface Group {
  id: number
  name: string
  fandom_name: string
  pictures: Pictures2
  idols: Idol[]
}

export interface Pictures2 {
  id: number
  name: string
  banners: Banner2[]
  profiles: Profile2[]
}

export interface Banner2 {
  id: number
  url: string
}

export interface Profile2 {
  id: number
  url: string
}

export interface Idol {
  id: number
  name: string
  pictures: Pictures3
}

export interface Pictures3 {
  id: number
  name: string
  banners: Banner3[]
  profiles: Profile3[]
}

export interface Banner3 {
  id: number
  url: string
}

export interface Profile3 {
  id: number
  url: string
}
