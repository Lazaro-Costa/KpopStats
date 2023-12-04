import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import { ICreateCompany, ICreatePic } from '../../Interfaces/Interfaces.api';
import InputDate from '../Form/Input/InputDate/InputDate';
import InputComponent from '../Form/Input/InputComponent/InputComponent';
import Button from '../Button/Button';
import { CreateEntity } from '../../utils/CreateEntity';

const CadCompany = () => {
  const [company, setCompany] = React.useState<ICreateCompany>({
    name: '',
    founding_date: '',
    headquarters: '',
    ceo: '',
    more_info: '',
    picsId: '',
  });
  const [pics, setPics] = React.useState<ICreatePic>({
    name: '',
    urls_banner: [''],
    urls_profile: [''],
  });
  const [load, setLoad] = React.useState(false);
  const [erro, setErro] = React.useState<Error | Boolean>(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      setLoad(true);
      setErro(false);
      const data: ICreateCompany = {
        ...company,
        founding_date: new Date(company.founding_date).toISOString(),
      }
      const CreateCompany = new CreateEntity(data, pics);
      const response = await CreateCompany.createEntity('http://localhost:3000/companys');
      if(response){
        console.log(response)
        setCompany({
          name: '',
          founding_date: '',
          headquarters: '',
          ceo: '',
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
  if(load) return <p>Loading...</p>;
  if(erro) return <p>{JSON.stringify(erro)}</p>;
  return (
    <FormContainer>
      <FormGroup>
        <h1 className="text-3xl text-slate-200">Company</h1>
        <Input
          req
          content={'Nome'}
          value={company.name}
          onChange={({ target }) =>
            setCompany({ ...company, name: target.value })
          }
        />

        <InputDate
          label={'Founding date'}
          value={company.founding_date as string}
          onChange={({ target }) =>
            setCompany({ ...company, founding_date: target.value })
          }
        />

        <Input
          req
          content={'Headquarters'}
          value={company.headquarters}
          onChange={({ target }) =>
            setCompany({ ...company, headquarters: target.value })
          }
        />

        <Input
          req
          content={'Ceo'}
          value={company.ceo}
          onChange={e => setCompany({ ...company, ceo: e.target.value })}
        />

        <Input
          req
          content={'More Info'}
          value={company.more_info}
          onChange={({ target }) =>
            setCompany({ ...company, more_info: target.value })
          }
        />

        <InputComponent entity={pics} setEntity={setPics} />

        <div className='flex w-full justify-center items-center'>
          <Button label={'Cadastrar'} onClick={(e) => handleClick(e)}/>
        </div>
      </FormGroup>
      <pre>{JSON.stringify({company, pics}, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadCompany;
