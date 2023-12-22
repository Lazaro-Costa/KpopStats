import React from 'react'
import { IGetCompanys } from '../../Interfaces/Interfaces.api'
interface IProps {
  pics: IGetCompanys
  setCompany: React.Dispatch<React.SetStateAction<IGetCompanys | null>>
}
const UpdateImgs = ({pics, setCompany}: IProps) => {
  const divStyle = "flex flex-col gap-2 justify-center items-center rounded-lg overflow-hidden"
  const btnStyle = "bg-red-500 rounded-md px-2 py-1"

const handleRemove = (e, type, index) => {
  e.preventDefault();

  const { banners, profiles } = pics.pictures;
  const updatedBanners = [...banners.slice(0, index), ...banners.slice(index + 1)];
  const updatedProfiles = [...profiles.slice(0, index), ...profiles.slice(index + 1)];
  const updatedPictures = { ...pics.pictures, pictures: { banners: updatedBanners, profiles: updatedProfiles } };

  setCompany({...pics, pictures: updatedPictures});
  console.log(pics)
};
const handleChange = (e, type, index) => {
  e.preventDefault();
  if(type === 'banners') {
    
    setCompany({...pics, pictures: updatedPictures});
  }else if(type === 'profiles') {
    const updatedProfiles = [...pics.pictures.profiles.slice(0, index), ...pics.pictures.profiles.slice(index + 1)];
    const updatedPictures = { ...pics.pictures, profiles: updatedProfiles };
    setCompany({...pics, pictures: updatedPictures});
  }
}
  return (
    <>
      {pics.pictures.banners && pics.pictures.banners.map((banner, index) =>{
        return (
          <div key={banner.id}
          className={divStyle}>
            <img src={banner.url} alt={'bannner ' + index} />
            <button
            className={btnStyle}
            onClick={(e) => handleRemove(e, 'banners', index)}>Remover</button>
            <button
            className={btnStyle}
            onClick={(e) => handleChange(e, 'profiles', index)}>Alterar</button>
          </div>
        )
      })}
      {pics.pictures.profiles && pics.pictures.profiles.map((profile, index) =>{
        return (
          <div key={profile.id}
          className={divStyle}>

            <img src={profile.url} alt={'profile ' + index} />

            <button
            className={btnStyle}>Remover</button>
            <button
            className={btnStyle}>Alterar</button>
          </div>
        )
      })}
    </>
  )
}

export default UpdateImgs
