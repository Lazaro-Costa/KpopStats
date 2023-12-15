import React from 'react';
import Loading from '../Loading/Loading';
import { apiBase } from '../Helper/Variables';
import { useParams } from 'react-router-dom';
import { PG } from '../ProfileGroup/utils';
import Head from '../Helper/Head';
import PG_Container from '../ProfileGroup/utils/PG_Container';
import CardProvider from '../Card/CardProvider/CardProvider';
import { IGetCompanyRaw, IGetRelatedCompany } from './IGetCompanyRaw';
import IsGroup from '../ProfileGroup/ObjectInfo/IsGroup';
import RelatedIdol from '../ProfileIdol/relatedIdol/RelatedIdol';
import { FlipCard } from '../Card/FlipCard';

type IGetCompanyProfile = {
  Name: string;
  'Founding Date': string;
  Headquarters: string;
  CEO: string;
};

const ProfileCompany = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<IGetCompanyRaw>({} as IGetCompanyRaw);
  const [info, setInfo] = React.useState<IGetCompanyProfile>(
    {} as IGetCompanyProfile,
  );
  const [related, setRelated] = React.useState<IGetRelatedCompany>({} as IGetRelatedCompany);

  function convertToInfo(data: IGetCompanyRaw): IGetCompanyProfile {
    return {
      Name: data.name,
      'Founding Date': new Date(data.founding_date).toLocaleDateString(),
      Headquarters: data.headquarters,
      CEO: data.ceo,
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
      fetch(`${apiBase}/companys/${id}`).then(res => res.json()),
      fetch(`${apiBase}/companys/related/${id}`).then(res => res.json()),
    ])
      .then(([CompanyData, relatedData]) => {
        setData(CompanyData as IGetCompanyRaw);
        setInfo(convertToInfo(CompanyData as IGetCompanyRaw));
        setRelated(relatedData as IGetRelatedCompany);
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
          key={data.pictures.profiles[0].id} //add pictures to api
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
          <>
            <div className='text-slate-200 bg-zinc-900 w-full text-center'>Related</div>
            {/* Refatorar o componente do FlipcardRoot ou achar uma alternativa nova */}
          </>
          )}
      </CardProvider>
    </PG.Component>
  );
};

export default ProfileCompany;