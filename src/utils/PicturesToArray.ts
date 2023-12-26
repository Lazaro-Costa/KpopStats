import { IGetPic } from "../Interfaces/Interfaces.api";

export function PicturesToArray(pics: IGetPic){
  const banners = pics.banners.map(banner => banner.url);
  const profiles = pics.profiles.map(profile => profile.url);
  return [...banners, ...profiles];
}
