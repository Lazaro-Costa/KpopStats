import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import InputComponent from '../Form/Input/InputComponent/InputComponent';
import {
  ICreateGroup,
  ICreatePic,
  IGetCompanys,
} from '../../Interfaces/Interfaces.api';
import DropdownSelect from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { CreateEntity } from '../../utils/CreateEntity';
import FetchInfoWithPagination from '../../utils/FetchInfoWithPagination';
import { apiBase } from '../Helper/Variables';
import Loading from '../Loading/Loading';

const CadGroup = () => {
  const [group, setGroup] = React.useState<ICreateGroup>({
    name: '',
    companyId: '',
    fandom_name: '',
    debut_date: '',
    more_info: '',
    picsId: '',
  });
  const [pics, setPics] = React.useState<ICreatePic>({
    name: '',
    urls_banner: [''],
    urls_profile: [''],
  });
  const [page, setPage] = React.useState(1);
  const [load, setLoad] = React.useState(false);
  const [erro, setErro] = React.useState<Error | Boolean>(false);
  const [companys, setCompanys] = React.useState<IGetCompanys[]>([]);
  const [result, setResult] = React.useState<string>('');
  const [showOriginalButton, setShowOriginalButton] = React.useState(true);


  FetchInfoWithPagination({
    uri: 'companys',
    entity: companys,
    page,
    setEntity: setCompanys,
  });

  const handleClick = async e => {
    e.preventDefault();
    try {
      setLoad(true);
      setErro(false);
      const data: ICreateGroup = {
        ...group,
        debut_date: new Date(group.debut_date).toISOString(),
      };
      const CreateGroup = new CreateEntity(data, pics);
      const response = await CreateGroup.createEntity(`${apiBase}/groups`);
      if (response) {
        setResult('Deu certo!');
        setGroup({
          name: '',
          companyId: '',
          fandom_name: '',
          debut_date: '',
          more_info: '',
          picsId: '',
        });
        setPics({
          name: '',
          urls_banner: [''],
          urls_profile: [''],
        });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) setErro(error);
    } finally {
      setLoad(false);
    }
  };
  const handleLoad = () => {
    if (load) {
      return <Loading />;
    } else if (erro !== false) {
      return <pre>{JSON.stringify(erro)}</pre>;
    } else if (result !== '' && showOriginalButton) {
      // Mostra o botão desabilitado temporariamente por 2000ms
      setTimeout(() => {
        setShowOriginalButton(false);
      }, 2000);

      return <Button label={result} disabled />;
    } else {
      // Se showOriginalButton for false, retorna o botão original
      return (
        <Button
          label={'Cadastrar'}
          onClick={(e) => {
            handleClick(e);
            setShowOriginalButton(true); // Restaura o estado do botão original
          }}
        />
      );
    }
  };
  return (
    <FormContainer>
      <FormGroup>
        <h1 className="text-3xl text-slate-200">Group</h1>
        <Input
          req
          content={'Nome'}
          value={group.name}
          onChange={({ target }) => setGroup({ ...group, name: target.value })}
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
        <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-slate-200 text-3xl">Company ID</h1>
          <DropdownSelect<IGetCompanys>
            options={companys}
            onSelect={company =>
              setGroup(prevGroup => ({ ...prevGroup, companyId: company.id }))
            }
            handleLoad={() => setPage(page + 1)}
          />
        </div>
        <Input
          req
          content={'More Info'}
          value={group.more_info}
          onChange={({ target }) =>
            setGroup({ ...group, more_info: target.value })
          }
        />

        <InputComponent entity={pics} setEntity={setPics} />

        <div className="flex w-full justify-center items-center">
          {handleLoad()}
        </div>
      </FormGroup>
      <pre>{JSON.stringify({ group, pics }, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadGroup;
