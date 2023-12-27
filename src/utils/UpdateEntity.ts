import { apiBase } from "../Components/Helper/Variables";
import { ICreateCompany, ICreateGroup, ICreateIdol, ICreatePic, } from "../Interfaces/Interfaces.api";
//Adaptar os métodos para a estratégia do Update
type Entity = Partial<ICreateCompany | ICreateGroup | ICreateIdol>

export class UpdateEntity{
  constructor(readonly entity: Entity, readonly uri: string) {
  }
  public async updateEntity(id: number) {
    const response = await fetch(`${apiBase}/${this.uri}/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.entity),
      // credentials: 'include',
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  }
  public async updatePic(id:number, pics: Partial<ICreatePic>) {
    const data = {
      ...pics,
      name: `PICS_${this.entity.name}`,
    }
    const response = await fetch(`${apiBase}/pics/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // credentials: 'include',
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  }
}
