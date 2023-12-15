import React from 'react';
import Loading from '../Loading/Loading';
import { Idol } from '../../Interfaces/Interfaces.api';
import { apiBase } from '../Helper/Variables';
import { useParams } from 'react-router-dom';
import { PG } from '../ProfileGroup/utils';
import Head from '../Helper/Head';
import PG_Container from '../ProfileGroup/utils/PG_Container';
import IsGroup from '../ProfileGroup/ObjectInfo/IsGroup';
import CardProvider from '../Card/CardProvider/CardProvider';
import { IGetRelated } from './IGetRelated';
import RelatedIdol from './relatedIdol/RelatedIdol';
type IGetIdol = {
  Name: string;
  'Birth name': string;
  'Birth date': string;
  'Foreign name': string;
  'Birth place': string;
};
const ProfileIdol = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<Idol>({} as Idol);
  const [info, setInfo] = React.useState<IGetIdol>({} as IGetIdol);
  const [related, setRelated] = React.useState<IGetRelated>({} as IGetRelated);

  function convertToInfo(data: Idol): IGetIdol {
    return {
      Name: data.name,
      'Birth name': data.korean_name,
      'Birth date': new Date(data.date_birth).toLocaleDateString(),
      'Foreign name': data.foreign_name ? data.foreign_name : 'N/A',
      'Birth place': data.nationality ? data.nationality : 'N/A',
    };
  }
  function converterStringParaObjeto(str: string): Record<string, string> {
    const keyValuePairs = str.split('_');
    const result: Record<string, string> = {};

    if (keyValuePairs.length === 0 || keyValuePairs[0] === '') {
      return result;
    }
    keyValuePairs.forEach(pair => {
      const [key, value] = pair.split(': ');
      result[key.trim()] = value.trim();
    });

    return result;
  }

  React.useEffect(() => {
    Promise.all([
      fetch(`${apiBase}/idols/${id}`).then(res => res.json()),
      fetch(`${apiBase}/idols/related/${id}`).then(res => res.json()),
    ])
      .then(([idolData, relatedData]) => {
        setData(idolData as Idol);
        setInfo(convertToInfo(idolData as Idol));
        setRelated(relatedData as IGetRelated);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        // Tratar o erro de forma apropriada (exibir uma mensagem, fazer um fallback etc.)
      });
  }, []);

  if (!data.name)
    return (
      <div className="flex w-full h-screen place-items-center">
        <Loading />
      </div>
    );
  return (
    <PG.Component key={data.id}>
      <Head title={data.name} description={data.name + ' Profile'} />
      <PG_Container>
        <div
          key={data.pictures.profiles[0].id}
          className="max-w-4xl rounded-lg overflow-hidden shadow-lg m-4"
        >
          <img
            loading="lazy"
            src={data.pictures.profiles[0].url}
            alt={data.name}
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div
            className={`flex flex-col items-center w-max-750 gap-4 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent`}
          >
            <h1 className="text-slate-200 bg-zinc-900 w-full text-center">
              Background
            </h1>
            <IsGroup data={info} />
          </div>

          {data.more_info && (
            <div
              className={`flex flex-col items-center w-max-750 gap-4 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent`}
            >
              <h1 className="text-slate-200 bg-zinc-900 w-full text-center">
                More Info
              </h1>
              <IsGroup data={converterStringParaObjeto(data.more_info)} />
            </div>
          )}
        </div>
      </PG_Container>
      <CardProvider>
        {!related ? (
          <div className="flex w-full h-screen place-items-center">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <RelatedIdol data={related} />
          </div>
        )}
      </CardProvider>
    </PG.Component>
  );
};

export default ProfileIdol;