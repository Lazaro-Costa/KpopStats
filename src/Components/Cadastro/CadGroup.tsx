import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import InputComponent from '../Form/Input/InputComponent/InputComponent';
import { ICreateGroup, ICreatePic, IGetCompanys } from '../../Interfaces/Interfaces.api';
import DropdownSelect from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { CreateEntity } from '../../utils/CreateEntity';

const CadGroup = () => {
  const [group, setGroup] = React.useState<ICreateGroup>({
    name: '',
    companyId: '',
    fandom_name: '',
    debut_date: '',
    more_info: '',
    picsId: '',
  });
  const [page, setPage] = React.useState(1)
  const [load, setLoad] = React.useState(false);
  const [erro, setErro] = React.useState<Error | Boolean>(false);
  const [companys, setCompanys] = React.useState<IGetCompanys[]>([])


  React.useEffect(() => {
    fetch(`http://localhost:3000/companys?page=${page}`)
    .then(res => res.json())
    .then((data) => {
      if(data.length === 0) return
      setCompanys([...companys, ...data])
    })
  }, [page])

  const [pics, setPics] = React.useState<ICreatePic>({
    name: '',
    urls_banner: [''],
    urls_profile: [''],
  });


  const handleClick = async (e) => {
    e.preventDefault();
    try{
      setLoad(true);
      setErro(false);
      const data: ICreateGroup = {
        ...group,
        debut_date: new Date(group.debut_date).toISOString(),
      }
      const CreateGroup = new CreateEntity(data, pics);
      const response = await CreateGroup.createEntity('http://localhost:3000/groups');
      if(response){
        console.log(response)
        setGroup({
          name: '',
          companyId: '',
          fandom_name: '',
          debut_date: '',
          more_info: '',
          picsId: '',
        })
        setPics({
          name: '',
          urls_banner: [''],
          urls_profile: [''],
        })
      }
    }catch(error){
      console.log(error)
      if(error instanceof Error) setErro(error);
    }finally{
      setLoad(false);
    }
  }
  if(load) console.log('Loading...')
  if(erro) console.log(erro)
  return (
    <FormContainer>
      <FormGroup>
        <h1 className="text-3xl text-slate-200">Group</h1>
        <Input
          req
          content={'Nome'}
          value={group.name}
          onChange={({ target }) =>
            setGroup({ ...group, name: target.value })
          }
        />

        <Input
          req
          content={'Fandom name'}
          value={group.fandom_name}
          onChange={({ target }) =>
            setGroup({ ...group, fandom_name: target.value })
          }
        />

        <InputDate
          label={'Debut date'}
          value={group.debut_date}
          onChange={({ target }) =>
            setGroup({ ...group, debut_date: target.value })
          }
        />

        <DropdownSelect options={companys} onSelect={(id) => setGroup({ ...group, companyId: id })} handleLoad={() => setPage(page + 1)}/>

        <Input
          req
          content={'More Info'}
          value={group.more_info}
          onChange={({ target }) =>
            setGroup({ ...group, more_info: target.value })
          }
        />

        <InputComponent entity={pics} setEntity={setPics} />

        <div className='flex w-full justify-center items-center'>
          <Button label={'Cadastrar'} onClick={(e) => handleClick(e)}/>
        </div>

      </FormGroup>
      <pre>{JSON.stringify({group, pics}, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadGroup;
