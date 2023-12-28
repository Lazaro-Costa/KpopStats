import React from 'react';
import { IGetPic } from '../../Interfaces/Interfaces.api';
import { apiBase } from '../Helper/Variables';
import Loading from '../Loading/Loading';
import Input from '../Form/Input/InputPlaceholder/Input';

const ShowImages = ({ picsId }: { picsId: number }) => {
  const btnStyle =
    'flex px-2 py-1 bg-red-500 items-center justify-center rounded-md';
  const divContainer =
    'flex flex-col gap-2 items-center justify-center rounded-lg overflow-hidden';
  const [isInput, setIsInput] = React.useState(false);
  const [pics, setPics] = React.useState<IGetPic>({} as IGetPic);
  const [newProfile, setNewProfile] = React.useState({ url: '' });
  const [newBanner, setNewBanner] = React.useState({ url: '' });
  const [load, setLoad] = React.useState(false);
  const [error, setError] = React.useState<Error | null | boolean>(null);
  const [controller, setController] = React.useState(false); //a cada vez que muda, faz fetch do picsId
  React.useEffect(() => {
    async function initialFetch() {
      try {
        setLoad(true);
        setError(false);
        const response = await fetch(`${apiBase}/pics/find/${picsId}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        if (data) setPics(data);
      } catch (err) {
        if (err instanceof Error) setError(err);
        console.log(error);
      } finally {
        setLoad(false);
      }
    }

    initialFetch();
  }, [])

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoad(true);
        setError(false);
        const response = await fetch(`${apiBase}/pics/find/${picsId}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        if (data) setPics(data);
      } catch (err) {
        if (err instanceof Error) setError(err);
        console.log(error);
    }finally {
      setLoad(false);
    }
  }

  fetchData();
  }, [controller]);

  const handleExclude = async (e, id, uri) => {
    e.preventDefault();
    try {
      setLoad(true);
      setError(false);
      const response  = await fetch(`${apiBase}/${uri}/del/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if(!response.ok) throw new Error(`Error: ${response.status}`);
      console.log(await response.json());
    } catch (err) {
      if(err instanceof Error) setError(err);
      console.log(error);
    } finally {
      setLoad(false);
      setController(!controller);
    }
  };
  const handleModify = async (uri, id) => {
    if (!isInput) {
      setIsInput(true);
    } else {
      try {
        setLoad(true);
        setError(false);
        const response = await fetch(`${apiBase}/${uri}/update/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uri === 'banners' ? newBanner : newProfile),
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
      } catch (err) {
        console.log(err);
        if(err instanceof Error) setError(err);
      } finally {
        setIsInput(false);
        setLoad(false);
        setController(!controller);
      }
    }
  };
  const handleInput = (uri, id) => (
    <>
    <Input content={'Nova url'} value={uri === 'banners' ? newBanner.url : newProfile.url} onChange={({target}) => uri === 'banners' ? setNewBanner({url: target.value}) : setNewProfile({url: target.value})}/>
    <button className={btnStyle} onClick={() => handleModify(uri, id)}>Confirmar</button>
    <button className={btnStyle} onClick={() => setIsInput(false)}>Cancelar</button>
    </>
  )
  return (
    <div className="flex flex-col w-full gap-2">
      {pics.banners &&
        pics.banners.map(pic => (
          <div key={pic.id} className={divContainer}>
            <img src={pic.url} />
            {load ? (
              <Loading />
            ) : isInput ? handleInput('banners', pic.id) : (
              <>
                <button
                  className={btnStyle}
                  onClick={e => handleExclude(e, pic.id, 'banners')}
                >
                  Excluir
                </button>
                <button
                  className={btnStyle}
                  onClick={e => {
                    e.preventDefault();
                    handleModify('banners', pic.id);
                  }}
                >
                  Alterar
                </button>
              </>
            )}
          </div>
        ))}
      {pics.profiles &&
        pics.profiles.map(pic => (
          <div key={pic.id} className={divContainer}>
            <img src={pic.url} />

            {load ? (
              <Loading />
            ) : isInput ? handleInput('profiles', pic.id) : (
              <>
                <button
                  className={btnStyle}
                  onClick={e => handleExclude(e, pic.id, 'banners')}
                >
                  Excluir
                </button>
                <button
                  className={btnStyle}
                  onClick={e => {
                    e.preventDefault();
                    handleModify('profiles', pic.id);
                  }}
                >
                  Alterar
                </button>
              </>
            )}

          </div>
        ))}
    </div>
  );
};
export default ShowImages;
