import React from 'react'
import FormContainer from '../Form/FormContainer/FormContainer';
import DropdownSelect from '../Dropdown/Dropdown';
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
import { IGetIdol } from '../../Interfaces/Interfaces.api';
import FormGroup from '../Form/FormGroup/FormGroup';

const UpdateIdol = () => {
  const boxStyle =
    'flex flex-col gap-4 items-center justify-center p-2 bg-zinc-800 rounded-lg';
  const [idol, SetIdol] = React.useState<IGetIdol | null>(null);
  const [load, setLoad] = React.useState(false);
  const [modified, setModified] = React.useState<Partial<IGetIdol>>({
    name: '',
    date_birth: '',
    foreign_name: '',
    korean_name: '',
    nationality: '',
    more_info: '',
  });
  const [atual, setAtual] = React.useState<IGetIdol[]>([]);
  const [page, setPage] = React.useState(1);
  const { fetchLoad, fetchError } = FetchWithPage<IGetIdol>(
    'idols/resume',
    atual,
    setAtual,
    page,
  );
  const handleClick = async (e) => {
    e.preventDefault();
    if(idol?.id){
      try{
        setLoad(true);
        const response = await funcUpdate(idol.id, 'idols', modified);
        if(!response) throw new Error(`Error: ${response}`);
      }catch(err){
        if(err instanceof Error)
        console.log(err.message);
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
          <h1 className="text-slate-200 text-3xl">Idol</h1>
          <DropdownSelect<IGetIdol>
            options={atual}
            onSelect={idol => SetIdol(idol)}
            handleLoad={() => setPage(page + 1)}
          />
        </div>
        {idol && (
          <>
            <div className={boxStyle}>
              <Label.Small text={idol.name} />
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
                text={dateToString(idol.date_birth)}
              />
              <InputDate
                label={'Debut Birth'}
                value={modified.date_birth}
                onChange={({target}) => {
                  setModified({
                    ...modified,
                    date_birth:target.value,
                  });
                }}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={idol.korean_name} />
              <Input
                req={false}
                content={'Birth Name'}
                value={modified.korean_name}
                onChange={({target}) => setModified({...modified, korean_name: target.value})}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={idol.foreign_name} />
              <Input
                req={false}
                content={'Foreign Name'}
                value={modified.foreign_name}
                onChange={({target}) => setModified({...modified, foreign_name: target.value})}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={idol.nationality} />
              <Input
                req={false}
                content={'Nationality'}
                value={modified.nationality}
                onChange={({target}) => setModified({...modified, nationality: target.value})}
              />
            </div>

            <div className={boxStyle}>
              <Label.Small text={idol.more_info} />
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
                picsId={idol.picsId}
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
export default UpdateIdol
