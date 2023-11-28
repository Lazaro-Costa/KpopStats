import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import InputDate from '../Form/Input/InputDate/InputDate';
import InputComponent from '../Form/Input/InputComponent/InputComponent';
import { ICreateGroup } from '../../Interfaces/Interfaces.api';

const CadGroup = () => {
  const [group, setGroup] = React.useState<ICreateGroup>({
    name: '',
    companyId: '',
    fandom_name: '',
    debut_date: '',
    moreInfo: '',
    picsId: '',
    urls_banner: [''],
    urls_profile: [''],
  });
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

        <Input
          req
          content={'group ID'}
          type="number"
          value={group.companyId}
          onChange={({ target }) =>
            setGroup({ ...group, companyId: +target.value })
          }
        />

        <Input
          req
          content={'Pics Id'}
          type="number"
          value={group.picsId}
          onChange={({ target }) =>
            setGroup({ ...group, picsId: +target.value })
          }
        />

        <Input
          req
          content={'More Info'}
          value={group.moreInfo}
          onChange={({ target }) =>
            setGroup({ ...group, moreInfo: target.value })
          }
        />

        <InputComponent entity={group} setEntity={setGroup} />
      </FormGroup>
      <pre>{JSON.stringify(group, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadGroup;
