export interface IGetRelatedGroup {
  name: string
  fandom_name: string
  company: Company
  idols: Idol[]
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

export interface Idol {
  id: number
  name: string
  pictures: Pictures2
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
