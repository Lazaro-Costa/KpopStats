import React from 'react';
import { apiBase } from '../Components/Helper/Variables';

function FetchWithPage<T>(
  uri: string,
  entity: T[],
  setEntity: React.Dispatch<React.SetStateAction<T[]>>,
  page = 1,
) {
  const [fetchLoad, setFetchLoad] = React.useState(false);
  const [fetchError, setFetchError] = React.useState<Error | boolean>(null);

  React.useEffect(() => {
    const fetchAux = async () => {
      try {
        setFetchLoad(true);
        setFetchError(false);
        const res: Response = await fetch(`${apiBase}/${uri}?page=${page}`);
        if (!res.ok) return;
        const data = await res.json() as T[];
        if(data.length === 0) return;
        setEntity([...entity, ...data]);
      } catch (err) {
        if (err instanceof Error) {
          setFetchError(err);
        } else console.log(err);
      } finally {
        setFetchLoad(false);
      }
    };
    fetchAux();
  }, [page]);

  return {
    fetchLoad,
    fetchError,
  };
}

export default FetchWithPage;
