interface Member {
  id: string
  name: string
  icon: string
}
export interface IGroupCard{
  id: string
  profile: string
  group: string
  fandom: string
  empresa: string
  url: string
  logoUrl: string
  members: Member[]
}
export interface IGroupRaw {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  fandom_name: string
  debut_date: string
  more_info: string
  companyId: number
  company: Company
  picsId: number
  pictures: Pictures
  idols: Idol[]
}
interface Company{
  id: number
  name: string
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
  pictures: Pictures2
}

interface Pictures2 {
  id: number
  name: string
  banners: Banner2[]
  profiles: Profile2[]
}

interface Banner2 {
  id: number
  url: string
}
interface Profile2 {
  id: number
  url: string
}

export function convertToIdol(data: IGroupRaw[]): IGroupCard[] {
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
interface Member {
  id: string;
  name: string;
  icon: string;
}

// interface Groups {
//   id: string;
//   profile: string;
//   group: string;
//   fandom: string;
//   empresa: string;
//   url: string;
//   logoUrl: string;
//   members: Member[];
// }

export const groups:IGroupCard[] = [
  {
    id: 'sadasd123',
    profile: 'itzy',
    group: 'ITZY',
    fandom: 'Midzy',
    empresa: 'JYP Entertainment',
    url: 'https://i.ibb.co/xMFd08b/Itzy-Checkmate.jpg',
    logoUrl: 'https://i.ibb.co/n3jxTMy/Itzy-logo.jpg',
    members: [
      {
        id: '3498fdfs',
        name: 'Hwang Yeji',
        icon: 'https://i.ibb.co/jgG544t/Yeji.jpg',
      },
      {
        id: 'asguffdg56',
        name: 'Lia',
        icon: 'https://i.ibb.co/dQRGx3K/Lia.jpg',
      },
      {
        id: '4898sdf',
        name: 'Lee Chaeryeong',
        icon: 'https://i.ibb.co/x3wTKjn/Chaeryeong.jpg',
      },
      {
        id: '234fdfj9',
        name: 'Shin Ryujin',
        icon: 'https://i.ibb.co/WPDpSSZ/Ryujin.jpg',
      },
      {
        id: 'asfs9571',
        name: 'Shin Yuna',
        icon: 'https://i.ibb.co/ZTKfnJw/Yuna.jpg',
      },
    ],
  },
  {
    id: 'qwef3456',
    profile: 'le_sserafim',
    group: 'LE SSERAFIM',
    fandom: 'FEARNOT',
    empresa: 'Source Music',
    url: 'https://i.ibb.co/r2RGW9b/Lesserafim.jpg',
    logoUrl: 'https://i.ibb.co/KhwtGLL/Lessarafim-logo.jpg',

    members: [
      {
        id: 'afhsd9234',
        name: 'Miwazaki Sakura',
        icon: 'https://i.ibb.co/dt2TYbQ/Sakura.jpg',
      },
      {
        id: 'asdn340',
        name: 'Hong Eunchae',
        icon: 'https://i.ibb.co/qgpNRHv/Eunchae.jpg',
      },
      {
        id: 'asdaf34345',
        name: 'Nakamura Kazuha',
        icon: 'https://i.ibb.co/wyKJdMk/Kazuha.jpg',
      },
      {
        id: 'asdvz124',
        name: 'Huh Yunjin',
        icon: 'https://i.ibb.co/sqrkrFt/Yunjin.jpg',
      },
      {
        id: 'amcv9098',
        name: 'Kim Garam',
        icon: 'https://i.ibb.co/s9krrLd/Garam.jpg',
      },
      {
        id: 'admku985',
        name: 'Kim Chaewon',
        icon: 'https://i.ibb.co/CpLrYhW/Chaewon.jpg',
      },
    ],
  },
];
export const profiles = [
  {
    id: 'asd92349',
    profile: 'le_sserafim',
    url: 'https://i.ibb.co/r2RGW9b/Lesserafim.jpg',
    info: {
      group_name: 'LE SSERAFIM',
      fandom_name: 'FEARNOT',
      company: 'Source Music',
      official_website: 'le-sserafim.com',
      official_japan_website: 'le-sserafim.jp',
      weverse: 'LE SSERAFIM',
      bilibili: '@LE_SSERAFIM',
      instagram: '@le_sserafim',
      youtube: 'LE SSERAFIM',
      facebook: 'LE SSERAFIM',
      twitter: '@im_lesserafim',
      staff_twitter: '@le_sserafim',
      japan_twitter: '@le_sserafim_jp',
      vlive: 'LE SSERAFIM',
      weibo: 'LE SSERAFIM',
      tiktok: '@le_sserafim',
      soundcloud: '@le_sserafim_official',
    },
  },
  {
    id: 'itzy123',
    profile: 'itzy',
    url: 'https://i.ibb.co/xMFd08b/Itzy-Checkmate.jpg',
    info: {
      group_name: 'ITZY',
      fandom_name: 'MIDZY',
      company: 'JYP Entertainment',
      official_website: 'itzy.jype.com',
      official_japan_website: 'itzyjapan.com',
      weverse: 'ITZY',
      instagram: 'itzy.all.in.us',
      youtube: 'ITZY',
      facebook: 'ITZY',
      twitter: 'ITZYOfficial',
      japan_twitter: 'JYPEITZY_JP',
      tiktok: 'itzyofficial',
    },
  },
];
