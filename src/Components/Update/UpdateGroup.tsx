import React from 'react'
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import DropdownSelect from '../Dropdown/Dropdown';
import { IGetGroups } from '../../Interfaces/Interfaces.api';
import { Label } from '../Label';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import UpdateImgs from './UpdateImgs';
import ShowImages from './showImages';
import FetchWithPage from '../../utils/FetchWithPage';
import funcUpdate from './funcUpdate';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
import { dateToString } from '../../utils/dateToString';

const UpdateGroup = () => {
  const boxStyle =
    'flex flex-col gap-4 items-center justify-center p-2 bg-zinc-800 rounded-lg';
  const [group, setGroup] = React.useState<IGetGroups | null>(null);
  const [load, setLoad] = React.useState(false);
  const [modified, setModified] = React.useState<Partial<IGetGroups>>({
    name: '',
    debut_date: '',
    fandom_name: '',
    more_info: '',
  });
  const [atual, setAtual] = React.useState<IGetGroups[]>([]);
  const [page, setPage] = React.useState(1);
  const { fetchLoad, fetchError } = FetchWithPage<IGetGroups>(
    'groups/resume',
    atual,
    setAtual,
    page,
  );
  const handleClick = async (e) => {
    e.preventDefault();
    if(group?.id){
      try{
        setLoad(true);
        const response = await funcUpdate(group.id, 'groups', modified);
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
          <h1 className="text-slate-200 text-3xl">Group</h1>
          <DropdownSelect<IGetGroups>
            options={atual}
            onSelect={group => setGroup(group)}
            handleLoad={() => setPage(page + 1)}
          />
        </div>
        {group && (
          <>
            <div className={boxStyle}>
              <Label.Small text={group.name} />
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
                text={dateToString(group.debut_date)}
              />
              <InputDate
                label={'Debut date'}
                value={modified.debut_date}
                onChange={({target}) => {
                  setModified({
                    ...modified,
                    debut_date:target.value,
                  });
                }}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={group.fandom_name} />
              <Input
                req={false}
                content={'Fandom Name'}
                value={modified.fandom_name}
                onChange={({target}) => setModified({...modified, fandom_name: target.value})}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={group.more_info} />
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
                picsId={group.picsId}
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
  )
}
// TODO: Criar o Update Idol
export default UpdateGroup
