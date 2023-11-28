import React from 'react';
import FormContainer from '../Form/FormContainer/FormContainer';
import FormGroup from '../Form/FormGroup/FormGroup';
import Input from '../Form/Input/InputPlaceholder/Input';
import { ICreateCompany } from '../../Interfaces/Interfaces.api';
import InputDate from '../Form/Input/InputDate/InputDate';
import InputComponent from '../Form/Input/InputComponent/InputComponent';

const CadCompany = () => {
  const [company, setCompany] = React.useState<ICreateCompany>({
    name: '',
    founding_date: '',
    headquarters: '',
    ceo: '',
    moreInfo: '',
    picsId: '',
    urls_banner: [''],
    urls_profile: [''],
  });
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
          value={company.founding_date}
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
          content={'Pics Id'}
          type="number"
          value={company.picsId}
          onChange={({ target }) =>
            setCompany({ ...company, picsId: +target.value })
          }
        />

        <Input
          req
          content={'More Info'}
          value={company.moreInfo}
          onChange={({ target }) =>
            setCompany({ ...company, moreInfo: target.value })
          }
        />

        <InputComponent entity={company} setEntity={setCompany} />
      </FormGroup>
      <pre>{JSON.stringify(company, null, 2)}</pre>
    </FormContainer>
  );
};

export default CadCompany;
