import React from 'react'
import { apiBase } from '../Helper/Variables';
import { UpdateEntity } from '../../utils/UpdateEntity';
import { ICreateCompany, ICreatePic } from '../../Interfaces/Interfaces.api';

const useHandleClick = () => {
  const [company, setCompany] = React.useState<Partial<ICreateCompany>>({
    name: '',
    founding_date: '',
    headquarters: '',
    ceo: '',
    more_info: '',
    picsId: '',
  });
  const [pics, setPics] = React.useState<Partial<ICreatePic>>({
    name: '',
    urls_banner: [''],
    urls_profile: [''],
  });
  const [load, setLoad] = React.useState(false);
  const [erro, setErro] = React.useState<Error | Boolean>(false);
  const [result, setResult] = React.useState<string>('');

  const handleClick = async e => {
    e.preventDefault();
    try {
      setLoad(true);
      setErro(false);
      const data: Partial<ICreateCompany> = {
        ...company,
        founding_date: new Date(company.founding_date).toISOString(),
      };
      const UpdateCompany = new UpdateEntity(data, pics);
      const response = await UpdateCompany.updateEntity(`${apiBase}/companys`);
      if (response.ok) {
        setResult('Deu certo!');
        console.log(response);
        setCompany({
          name: '',
          founding_date: '',
          headquarters: '',
          ceo: '',
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
  return {
    company,
    setCompany,
    pics,
    load,
    erro,
    result,
    handleClick,
  }
}

export default useHandleClick
