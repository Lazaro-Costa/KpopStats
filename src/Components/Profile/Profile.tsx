import { ArtistInfo } from '../../Interfaces/DataIdol';
import { Label } from '../Label';
import { PG } from '../ProfileGroup';
import PG_Container from '../ProfileGroup/PG_Container';
import style from './CSS/Profile.module.css';
const Profile = ({data}:{data:ArtistInfo}) => {
  const treatString = (text:string) =>{
    return text.split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  }
  return (
    <PG.Component key={data.id}>
      <PG_Container>
        <div className="max-w-md rounded-lg overflow-hidden shadow-lg m-4">
          <img
            src={data.url}
            alt={data.info.group_name}
            className="object-cover"
          />
        </div>
        <div>
          <div className={style.gridContainer}>
            <span className="flex flex-col gap-1 items-end text-slate-200 col-[1]">
              {Object.entries(data.info).map(([key, _], index) => (
                <Label.Small key={index} text={treatString(key)} verde={true} />
              ))}
            </span>

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
