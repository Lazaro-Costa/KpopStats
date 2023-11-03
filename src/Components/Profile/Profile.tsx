import React from 'react';
import { ArtistInfo } from '../../Interfaces/DataIdol';
import { Label } from '../Label';
import { PG } from '../ProfileGroup';
import PG_Container from '../ProfileGroup/PG_Container';
import style from './CSS/Profile.module.css';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../Helper/fetchApi';

const Profile = () => {
  const {user} = useParams();
  const [data, setData ] = React.useState<ArtistInfo>({} as ArtistInfo);

  React.useEffect(() => {
    setData(fetchApi(user));
  }, []);

  const treatString = (text:string) =>{
    return text.split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  }
  if(!data.url) return <h1>Carregando</h1>;
  return (
    <PG.Component key={data.id}>
      <PG_Container>
        <div className="max-w-md rounded-lg overflow-hidden shadow-lg m-4">
          <img loading='lazy'
            src={data.url}
            alt={data.info.group_name}
            className="object-cover"
          />
        </div>
        <div>
          <div className={style.gridContainer}>
            {/* Chave das informações */}
            <span className="flex flex-col gap-1 items-end text-slate-200 col-[1]">
              {Object.entries(data.info).map(([key, _], index) => (
                <Label.Small key={index} verde={true} text={treatString(key)}  />
              ))}
            </span>

            {/* Valor das informações */}
            <span className="flex flex-col gap-1 items-start text-slate-200 col-[2]">
              {Object.entries(data.info).map(([_, value], index) => (
                <Label.Small key={index} text={value} />
              ))}
            </span>
          </div>
        </div>
      </PG_Container>
    </PG.Component>
  );
};

export default Profile;
