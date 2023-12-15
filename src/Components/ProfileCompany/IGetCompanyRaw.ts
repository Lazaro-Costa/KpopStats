export interface IGetCompanyRaw {
  name: string
  id: number
  ceo: string
  headquarters: string
  founding_date: string
  more_info: string
  pictures: Pictures
}
export interface IGetRelatedCompany {
  groups: Group[]
}

interface Group {
  id: number
  name: string
  fandom_name: string
  pictures: Pictures
  idols: Idol[]
}
interface Pictures {
  id: number
  name: string
  banners: Banner[]
  profiles: Profile[]
}

interface Banner {
  id: number
  url: string
}

interface Profile {
  id: number
  url: string
}

interface Idol {
  id: number
  name: string
  pictures: Pictures
}
