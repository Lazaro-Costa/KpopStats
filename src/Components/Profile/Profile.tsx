import React from 'react';
// import { ArtistInfo } from '../../Interfaces/DataIdol';
import { PG } from '../ProfileGroup';
import PG_Container from '../ProfileGroup/PG_Container';
import { useParams } from 'react-router-dom';
import { IGetGroups, InfoGroups } from '../../Interfaces/Interfaces.api';
import IsGroup from './ObjectInfo/IsGroup';
import { apiBase } from '../Helper/Variables';
import Head from '../Helper/Head';
import Loading from '../Loading/Loading';

const Profile = () => {
  const {user} = useParams();
  const [data, setData ] = React.useState<IGetGroups>({} as IGetGroups);
  const [info, setInfo] = React.useState<InfoGroups>({} as InfoGroups);

  function convertToInfo(data: IGetGroups): InfoGroups{
    return {
      Name: data.name,
      'Fandom Name': data.fandom_name,
      Debut: (data.debut_date ? new Date(data.debut_date).toLocaleDateString() : 'N/A'),
      Company: data.company.name,
    }
  }
  function converterStringParaObjeto(str: string): Record<string, string> {
    const keyValuePairs = str.split('_');
    const result: Record<string, string> = {};

    if(keyValuePairs.length === 0 || keyValuePairs[0] === '') {
      return result;
    }
    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split(': ');
      result[key.trim()] = value.trim();
    });

    return result;
  }

  React.useEffect(() => {
    fetch(`${apiBase}/groups/${user}`)
    .then(res => res.json())
    .then(groups => {
      setData(groups as IGetGroups)
      setInfo(convertToInfo(groups))
    })
    .catch(err => {
      console.log(err)
    })
  }, []);


  if(!data.name) return <Loading/>;
  return (
    <PG.Component key={data.id}>
      <Head title={data.name} description={data.name + ' Profile'}/>
      <PG_Container>
        <div key={data.pictures.profiles[0].id} className="max-w-4xl rounded-lg overflow-hidden shadow-lg m-4">
          <img loading='lazy'
            src={data.pictures.profiles[0].url}
            alt={data.name}
            className="object-cover"
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className={`flex flex-col items-center w-[400px] gap-4 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent`}>
            <h1 className='text-slate-200 bg-zinc-900 w-full text-center'>Background</h1>
            <IsGroup data={info} />
          </div>

          {data.more_info && (<div className={`flex flex-col items-center w-[400px] gap-4 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent`}>
            <h1 className='text-slate-200 bg-zinc-900 w-full text-center'>More Info</h1>
            <IsGroup data={converterStringParaObjeto(data.more_info)} />
          </div>)}

        </div>
      </PG_Container>
    </PG.Component>
  );
};

export default Profile;
