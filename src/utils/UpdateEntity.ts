import { apiBase } from "../Components/Helper/Variables";
import { ICreateCompany, ICreateGroup, ICreateIdol, ICreatePic, IGetPic } from "../Interfaces/Interfaces.api";
//Adaptar os métodos para a estratégia do Update
type Entity = Partial<ICreateCompany | ICreateGroup | ICreateIdol>

export class UpdateEntity{
  constructor(public entity: Entity, public pics: Partial<ICreatePic>) {
  }
  public async updateEntity(url: string) {
    const { id } = await this.createPic(`${apiBase}/pics`);
    const data = {
      ...this.entity,
      picsId: id,
    }
    console.log("Dados enviados: ",data)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return (await response.json());
  }
  public async createPic(url:string): Promise<IGetPic> {
    const data = {
      ...this.pics,
      name: `PICS_${this.entity.name}`,
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return (await response.json());
  }
}
