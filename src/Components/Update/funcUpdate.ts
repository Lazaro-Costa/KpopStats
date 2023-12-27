import { ICreatePic, IGetCompanys } from '../../Interfaces/Interfaces.api';
import { UpdateEntity } from '../../utils/UpdateEntity';

export default async function funcUpdate(
  id: number,
  uri: 'companys' | 'groups' | 'idols',
  modified: Partial<IGetCompanys>,
  pics?: Partial<ICreatePic>,
): Promise<Partial<IGetCompanys>> {
  if (modified && id) {
    const filteredModified = removeCamposVazios(modified); //Retira os campos vazios
    const newModified = !filteredModified[
      uri === 'idols'
        ? 'date_birth'
        : uri === 'companys'
        ? 'founding_date'
        : 'debut_date'
    ]
      ? { ...filteredModified }
      : {
          ...filteredModified,
          [uri === 'idols'
            ? 'date_birth'
            : uri === 'companys'
            ? 'founding_date'
            : 'debut_date']: new Date(
            filteredModified[
              uri === 'idols'
                ? 'date_birth'
                : uri === 'companys'
                ? 'founding_date'
                : 'debut_date'
            ],
          ).toISOString(),
        };
    const update = new UpdateEntity(newModified, uri);
    const data = {};
    const responseEntity = await update.updateEntity(id);

    if (responseEntity) {
      data['entity'] = responseEntity;
    }

    if (pics) {
      const responsePics = await update.updatePic(id, pics);
      if (responsePics) {
        data['pics'] = responsePics;
      }
    }
    return data;
  }
}
function removeCamposVazios<T>(objeto: T): Partial<T> {
  return Object.entries(objeto)
    .filter(
      ([_, valor]) => valor !== '' && valor !== null && valor !== undefined,
    )
    .reduce((acc, [chave, valor]) => ({ ...acc, [chave]: valor }), {});
}
