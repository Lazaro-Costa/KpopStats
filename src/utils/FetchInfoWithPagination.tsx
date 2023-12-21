import React from 'react';
import { apiBase } from '../Components/Helper/Variables';

function FetchInfoWithPagination({
  uri,
  entity,
  page,
  setEntity,
}){
  const verifyContent = (storage) => {
    const store = JSON.parse(storage);
    return store.length > 0 &&
    store[store.length - 1].id === (entity.length > 0 ? entity[entity.length - 1].id : 0);
  }
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchAux = async () => {
      const storage = localStorage.getItem(uri);
      if(storage && (verifyContent(storage) === false)) { //Verificar se funciona com paginação
        setEntity([...entity, ...JSON.parse(storage)]);
        return;
      }else {
        try {
          setLoading(true);
          const res: Response = await fetch(`${apiBase}/${uri}?page=${page}`);
          if(!res.ok || (Array.isArray(res) && res.length === 0)) return;
          const data = await res.json();
          // console.log(data) //LOG
          if (data.length === 0) return;
          setEntity([...entity, ...data]);
          localStorage.setItem(uri, JSON.stringify(data));
          localStorage.setItem('page', page);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchAux();
  }, [page]);

  return { loading, verifyContent };
};

export default FetchInfoWithPagination;
