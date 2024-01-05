import React from 'react';
import CardProvider from '../Card/CardProvider/CardProvider';
import { FlipCard } from '../Card/FlipCard';
import Loading from '../Loading/Loading';
import Head from '../Helper/Head';
import FetchInfoWithPagination from '../../utils/FetchInfoWithPagination';
import { Arrow } from '../Arrow';
import Refresh from '../Refresh/Refresh';
import { IGetGroups } from '../../Interfaces/Interfaces.api';

const Home = () => {
  const [groupRaw, setGroupRaw] = React.useState<IGetGroups[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastUpdated, setLastUpdated] = React.useState(null);

  const { loading } = FetchInfoWithPagination({
    uri: 'groups',
    entity: groupRaw,
    page,
    setEntity: setGroupRaw,
  });
  React.useEffect(() => {
    setLastUpdated(localStorage.getItem('lastUpdated'));
  }, [groupRaw]);

  const handleLoad = e => {
    e.preventDefault();
    setPage(page + 1);
  };
  const handleRefresh = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()} : ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    localStorage.setItem('lastUpdated', formattedDate);
  };

  return (
    <>
      <Head title="Home" description="Homepage" />
      {loading ? (
        <CardProvider>
          <Loading />
        </CardProvider>
      ) : (
        <div className='animeLeft'>
          <div>
            <div className="self-start w-full flex items-center justify-end m-4 sm:m-2">
              <span
              className='text-[#0f0] text-xs md:text-xl font-mono mr-2'
              >{lastUpdated && <p>Atualizado em: {lastUpdated}</p>}</span>
              <Refresh
                onClick={e => {
                  handleRefresh(e)
                }}
              />
            </div>
          </div>
          <CardProvider>
            {groupRaw.map(group => {
              return <FlipCard.Root key={`${group.id}`} group={group} />;
            })}
            <div className="self-end w-full flex items-center justify-center">
              <Arrow.Down onClick={handleLoad} />
            </div>
          </CardProvider>
        </div>
      )}
    </>
  );
};

export default Home;
// TODO: Conferir se os padroes dos @media screen estao iguais e testar a responsividade das telas.
