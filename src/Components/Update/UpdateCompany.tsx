import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';

import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import FetchWithPage from '../../utils/FetchWithPage';
import React from 'react';
import { IGetCompanys } from '../../Interfaces/Interfaces.api';
import DropdownSelect from '../Dropdown/Dropdown';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';

const UpdateCompany = () => {
  const [company, setCompany] = React.useState<IGetCompanys | null>(null);
  const [atual, setAtual] = React.useState<IGetCompanys[]>([]);
  const [page, setPage] = React.useState(1);
  const { fetchLoad, fetchError } = FetchWithPage<IGetCompanys>(
    'companys/resume',
    atual,
    setAtual,
    page,
  )
  const handleClick = () => {
    console.log('click');
  }
  const handleDate = (date:string):string =>{
    if(date){
      const [day, month, year] = new Date(date).toLocaleDateString().split('/');
      return `${year}-${month}-${day}`;
    }
  }
  const handleLoad = () => {
    if (fetchLoad) {
      return <Loading />;
    } else if (fetchError) {
      return <pre>{JSON.stringify(fetchError)}</pre>;
     } else {
      return <Button label={'Update'} onClick={handleClick} />;
    }
  };
  return (
    <FormContainer>
      <FormGroup>
      <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-slate-200 text-3xl">Company</h1>
      <DropdownSelect
        options={atual}
        onSelect={company => setCompany(company)}
        handleLoad={() => setPage(page + 1)}
      />
      </div>
        {company && (<>
        <Input
            content={'Name'}
            value={company.name}
            onChange={e => setCompany({ ...company, name: e.target.value })}
            req={false}/>

        <InputDate
          label={'Founding date'}
          value={handleDate(company.founding_date)}//arrumar o problema da data antes de prosseguir
          onChange={({ target }) =>
            setCompany({ ...company, founding_date: target.value })
          }
        />

        <Input
          req={false}
          content={'Headquarters'}
          value={company.headquarters}
          onChange={({ target }) =>
            setCompany({ ...company, headquarters: target.value })
          }
        />

        <Input
          req={false}
          content={'Ceo'}
          value={company.ceo}
          onChange={e => setCompany({ ...company, ceo: e.target.value })}
        />

        <Input
          req={false}
          content={'More Info'}
          value={company.more_info}
          onChange={({ target }) =>
            setCompany({ ...company, more_info: target.value })
          }
        />
        </>)}
        <div className="flex w-full justify-center items-center">
          {handleLoad()}
        </div>
      </FormGroup>
      <pre>{JSON.stringify({ company }, null, 2)}</pre>
    </FormContainer>
  );
};

export default UpdateCompany;
