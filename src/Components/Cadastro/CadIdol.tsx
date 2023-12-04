import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import {
  ICreateIdol,
  ICreatePic,
  IGetCompanys,
  IGetGroups,
} from '../../Interfaces/Interfaces.api';
import InputComponent from '../Form/Input/InputComponent/InputComponent';
import { CreateEntity } from '../../utils/CreateEntity';
import DropdownSelect from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import FetchInfoWithPagination from '../../utils/FetchInfoWithPagination';

const CadIdol = () => {
  const [idol, setIdol] = React.useState<ICreateIdol>({
    name: '',
    companyId: '',
    solist: '',
    korean_name: '',
    foreign_name: '',
    nationality: '',
    date_birth: '',
    more_info: '',
    groupId: '',
    picsId: '',
  });
  const [pics, setPics] = React.useState<ICreatePic>({
    name: '',
    urls_banner: [''],
    urls_profile: [''],
  });

  const [page, setPage] = React.useState(1);
  const [pageCo, setPageCo] = React.useState(1);
  const [groups, setGroups] = React.useState<IGetGroups[]>([]);
  const [companys, setCompanys] = React.useState<IGetCompanys[]>([]);

  FetchInfoWithPagination({
    uri: 'groups',
    entity: groups,
    page,
    setEntity: setGroups,
  });
  FetchInfoWithPagination({
    uri: 'companys',
    entity: companys,
    page: pageCo,
    setEntity: setCompanys,
  });

  const handleClick = async e => {
    e.preventDefault();
    try {
      const data: ICreateIdol = {
        ...idol,
        date_birth: new Date(idol.date_birth).toISOString(),
      };
      const CreateGroup = new CreateEntity(data, pics);
      const response = await CreateGroup.createEntity(
        'http://localhost:3000/idols',
      );
      if (response) {
        console.log(response);
        setIdol({
          name: '',
          companyId: '',
          solist: '',
          korean_name: '',
          foreign_name: '',
          nationality: '',
          date_birth: '',
          more_info: '',
          groupId: '',
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
    }
  };

  return (
    <FormContainer>
      <FormGroup>
        <h1 className="text-3xl text-slate-200">Idol</h1>

        <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-slate-200 text-3xl">Solist?</h1>
          <DropdownSelect
            options={[
              { id: 0, name: 'false' },
              { id: 1, name: 'true' },
            ]}
            onSelect={op =>
              setIdol(prevIdol => ({ ...prevIdol, solist: Boolean(op.id) }))
            }
            handleLoad={() => null}
          />
        </div>
        {idol.solist === false && (
          <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-slate-200 text-3xl">Groups</h1>
            <DropdownSelect
              options={groups}
              onSelect={group =>
                setIdol(prevIdol => ({
                  ...prevIdol,
                  groupId: group.id,
                  companyId: group.companyId,
                }))
              }
              handleLoad={() => setPage(page + 1)}
            />
          </div>
        )}

        {idol.solist === true && (
          <div className="w-full bg-zinc-800 p-4 gap-2 rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-slate-200 text-3xl">Companys</h1>
            <DropdownSelect
              options={companys}
              onSelect={company =>
                setIdol(prevIdol => ({ ...prevIdol, companyId: company.id }))
              }
              handleLoad={() => setPageCo(pageCo + 1)}
            />
          </div>
        )}

        <Input
          req
          content={'Nome'}
          value={idol.name}
          onChange={({ target }) => setIdol({ ...idol, name: target.value })}
        />

        <Input
          req
          content={'Korean Name'}
          value={idol.korean_name}
          onChange={({ target }) =>
            setIdol({ ...idol, korean_name: target.value })
          }
        />

        <InputDate
          label={'Date Birth'}
          value={idol.date_birth}
          onChange={({ target }) =>
            setIdol({ ...idol, date_birth: target.value })
          }
        />


        <Input
          req
          content={'Foreign Name'}
          value={idol.foreign_name}
          onChange={({ target }) =>
            setIdol({ ...idol, foreign_name: target.value })
          }
        />

        <Input
          req
          content={'Nationality'}
          value={idol.nationality}
          onChange={({ target }) =>
            setIdol({ ...idol, nationality: target.value })
          }
        />

        <Input
          req
          content={'More Info'}
          value={idol.more_info}
          onChange={({ target }) =>
            setIdol({ ...idol, more_info: target.value })
          }
        />


        <InputComponent entity={pics} setEntity={setPics} />

        <div className="flex w-full justify-center items-center">
          <Button label={'Cadastrar'} onClick={e => handleClick(e)} />
        </div>
      </FormGroup>
      <pre>{JSON.stringify({ idol, pics }, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadIdol;
