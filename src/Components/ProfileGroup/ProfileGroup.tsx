import React from 'react';
import { PG } from './utils';
import PG_Container from './utils/PG_Container';
import { useParams } from 'react-router-dom';
import { IGetGroups, InfoGroups } from '../../Interfaces/Interfaces.api';
import IsGroup from './ObjectInfo/IsGroup';
import { apiBase } from '../Helper/Variables';
import Head from '../Helper/Head';
import Loading from '../Loading/Loading';
import CardProvider from '../Card/CardProvider/CardProvider';
import RelatedGroup from './RelatedGroup/RelatedGroup';
import { IGetRelatedGroup } from './RelatedGroup/IGetRelatedGroup';
import { dateToString } from '../../utils/dateToString';
import AuxImage from '../ImageModal/AuxImage';
import converterStringParaObjeto from '../../utils/stringToObject';

const ProfileGroups = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<IGetGroups>({} as IGetGroups);
  const [info, setInfo] = React.useState<InfoGroups>({} as InfoGroups);
  const [related, setRelated] = React.useState<IGetRelatedGroup>(
    {} as IGetRelatedGroup,
  );

  function convertToInfo(data: IGetGroups): InfoGroups {
    return {
      Name: data.name,
      'Fandom Name': data.fandom_name,
      Debut: data.debut_date ? dateToString(data.debut_date) : 'N/A',
      Company: data.company.name,
    };
  }

  React.useEffect(() => {
    Promise.all([
      fetch(`${apiBase}/groups/find/${id}`).then(res => res.json()),
      fetch(`${apiBase}/groups/related/${id}`).then(res => res.json()),
    ])
      .then(([idolData, relatedData]) => {
        setData(idolData as IGetGroups);
        setInfo(convertToInfo(idolData));
        setRelated(relatedData as IGetRelatedGroup);
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

          <AuxImage pictures={data.pictures} />

        </div>
        <div className="flex flex-col gap-4 m-2 md:grid md:grid-cols-2 md:gap-4 md:mb-3">
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
            <RelatedGroup data={related} />
          </div>
        )}
      </CardProvider>
    </PG.Component>
  );
};

export default ProfileGroups;
