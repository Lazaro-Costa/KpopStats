import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import { ICreateIdol } from '../../Interfaces/Interfaces.api';
import InputComponent from '../Form/Input/InputComponent/InputComponent';

const CadIdol = () => {
  const [idol, setIdol] = React.useState<ICreateIdol>({
    name: '',
    companyId: '',
    solist: '',
    korean_name: '',
    foreign_name: '',
    nationality: '',
    date_birth: '',
    moreInfo: '',
    groupId: '',
    picsId: '',
    urls_banner: [''],
    urls_profile: [''],
  });
  return (
    <FormContainer>
      <FormGroup>
        <h1 className="text-3xl text-slate-200">Idol</h1>
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
          content={'Solist'}
          value={idol.solist}
          onChange={({ target }) => setIdol({ ...idol, solist: target.value })}
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
          content={'Company ID'}
          value={idol.companyId}
          onChange={({ target }) =>
            setIdol({ ...idol, companyId: target.value })
          }
        />

        <Input
          req
          content={'Group ID'}
          value={idol.groupId}
          onChange={({ target }) => setIdol({ ...idol, groupId: target.value })}
        />

        <Input
          req
          content={'Pics ID'}
          value={idol.picsId}
          onChange={({ target }) => setIdol({ ...idol, picsId: target.value })}
        />

        <Input
          req
          content={'More Info'}
          value={idol.moreInfo}
          onChange={({ target }) =>
            setIdol({ ...idol, moreInfo: target.value })
          }
        />

        <InputComponent entity={idol} setEntity={setIdol} />
      </FormGroup>
      <pre>{JSON.stringify(idol, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadIdol;
