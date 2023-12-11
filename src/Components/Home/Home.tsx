import React from 'react';
import CardProvider from '../Card/CardProvider/CardProvider';
import { FlipCard } from '../Card/FlipCard';
import { IGroupCard, IGroupRaw, convertToIdol } from '../../DataMock/DataIdol';
import Loading from '../Loading/Loading';
import Head from '../Helper/Head';
import FetchInfoWithPagination from '../../utils/FetchInfoWithPagination';
import { Arrow } from '../Arrow';
import Refresh from '../Refresh/Refresh';

const Home = () => {
  const [groupRaw, setGroupRaw] = React.useState<IGroupRaw[]>([]);
  const [groups, setGroups] = React.useState<IGroupCard[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastUpdated, setLastUpdated] = React.useState(null);

  const { loading } = FetchInfoWithPagination({
    uri: 'groups',
    entity: groupRaw,
    page,
    setEntity: setGroupRaw,
  });
  React.useEffect(() => {
    setGroups(convertToIdol(groupRaw));
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
        <>
          <div>
            <div className="self-start w-full flex items-center justify-end m-2">
              <span
              className='text-[#0f0] text-xl font-mono mr-2'
              >{lastUpdated && <p>Atualizado em: {lastUpdated}</p>}</span>
              <Refresh
                onClick={e => {
                  handleRefresh(e)
                }}
              />
            </div>
          </div>
          <CardProvider>
            {groups.map(group => {
              return <FlipCard.Root key={group.id} data={group} />;
            })}
            <div className="self-end w-full flex items-center justify-center">
              <Arrow.Down onClick={handleLoad} />
            </div>
          </CardProvider>
        </>
      )}
    </>
  );
};
// TODO:
// * Criar Pagina de Membros

export default Home;
