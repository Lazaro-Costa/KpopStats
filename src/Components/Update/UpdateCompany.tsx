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
import UpdateImgs from './UpdateImgs';
import { Label } from '../Label';
import funcUpdate from './funcUpdate';
import { dateToString } from '../../utils/dateToString';
import ShowImages from './showImages';

const UpdateCompany = () => {
  const boxStyle =
    'flex flex-col gap-4 items-center justify-center p-2 bg-zinc-800 rounded-lg';
  const [company, setCompany] = React.useState<IGetCompanys | null>(null);
  const [load, setLoad] = React.useState(false);
  const [modified, setModified] = React.useState<Partial<IGetCompanys>>({
    name: '',
    founding_date: '',
    headquarters: '',
    ceo: '',
    more_info: '',
  });
  const [atual, setAtual] = React.useState<IGetCompanys[]>([]);
  const [page, setPage] = React.useState(1);
  const { fetchLoad, fetchError } = FetchWithPage<IGetCompanys>(
    'companys/resume',
    atual,
    setAtual,
    page,
  );
  const handleClick = async (e) => {
    e.preventDefault();
    if(company?.id){
      try{
        setLoad(true);
        const response = await funcUpdate(company.id, modified);
        if(response) console.log(response);
      }catch(err){
        console.log(err);
      }finally{
        setLoad(false);
      }
    }
  };
  const handleLoad = () => {
    if (fetchLoad || load) {
      return <Loading />;
    } else if (fetchError) {
      return <pre>{JSON.stringify(fetchError)}</pre>;
    } else {
      return <Button label={'Update'} onClick={(e) => handleClick(e)} />;
    }
  };
  return (
    <FormContainer>
      <FormGroup>
        <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-slate-200 text-3xl">Company</h1>
          <DropdownSelect<IGetCompanys>
            options={atual}
            onSelect={company => setCompany(company)}
            handleLoad={() => setPage(page + 1)}
          />
        </div>
        {company && (
          <>
            <div className={boxStyle}>
              <Label.Small text={company.name} />
              <Input
                content={'Name'}
                value={modified.name}
                onChange={e =>
                  setModified({ ...modified, name: e.target.value })
                }
                req={false}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small
                text={dateToString(company.founding_date)}
              />
              <InputDate
                label={'Founding date'}
                value={modified.founding_date}
                onChange={({target}) => {
                  setModified({
                    ...modified,
                    founding_date:target.value,
                  });
                }}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={company.headquarters} />
              <Input
                req={false}
                content={'Headquarters'}
                value={modified.headquarters}
                onChange={({target}) => setModified({...modified, headquarters: target.value})}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={company.ceo} />
            <Input
              req={false}
              content={'Ceo'}
              value={modified.ceo}
              onChange={({target}) => setModified({ ...modified, ceo: target.value })}
            />
            </div>

            <div className={boxStyle}>
              <Label.Small text={company.more_info} />
            <Input
              req={false}
              content={'More Info'}
              value={modified.more_info}
              onChange={({ target }) =>
                setModified({ ...modified, more_info: target.value })
              }
            />
            </div>
            <UpdateImgs>
              <ShowImages
                pics={company.pictures}
              />
            </UpdateImgs>
          </>
        )}
        <div className="flex w-full justify-center items-center">
          {handleLoad()}
        </div>
      </FormGroup>
      <pre>{JSON.stringify({ modified }, null, 2)}</pre>
    </FormContainer>
  );
};

export default UpdateCompany;
