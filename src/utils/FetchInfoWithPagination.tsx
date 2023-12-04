import React from 'react';

const FetchInfoWithPagination =({ uri, entity, page, setEntity }) => {
  React.useEffect(() => {
    try{
      fetch(`http://localhost:3000/${uri}?page=${page}`)
      .then(res => res.json())
      .then((data: any) => {
        if (data.length === 0) return;
        setEntity([...entity, ...data]);
      })

    }catch(err){
      console.log(err);
    }
  }, [page])
  return{
    entity
  }
};

export default FetchInfoWithPagination;
