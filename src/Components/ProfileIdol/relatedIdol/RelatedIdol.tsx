import { Link } from 'react-router-dom'
import { CardFront } from '../../Card/CardFront'
import { Label } from '../../Label'
import { IGetRelated } from '../IGetRelated'
import PhotoRelated from './PhotoRelated'

const RelatedIdol = ({data}: {data: IGetRelated}) => {
  return (
    <div className='flex gap-4 flex-wrap'>
      <CardFront.Container>
      <PhotoRelated url={data.company.pictures.banners[0].url} logoUrl={data.company.pictures.profiles[0].url} alt={data.company.name} id={String(data.company.id)} perfil={'company'}/>
        <Label.Root>
          <div className="grid-rows-2">
            <span className="row-span-1 w-full flex justify-center gap-1 h-max">
              <Label.Small text={data.company.ceo} />
              <Label.Small text={data.company.headquarters} />
            </span>
            <span className="row-span-2">
              <Link to={`/company/${data.company.id}`}>
                <Label.Big text={data.company.name}/>
              </Link>
            </span>
          </div>
        </Label.Root>
      </CardFront.Container>

      {/* Group and Members*/}
      {data.group && (
      <CardFront.Container>
          <PhotoRelated url={data.group.pictures.profiles[0].url} logoUrl={data.group.pictures.banners[0].url} alt={data.group.name} id={String(data.group.id)} perfil={'perfil'}/>
          <Label.Root>
          <div className="grid-rows-2">
            <span className="row-span-1 w-full flex justify-around gap-1 h-max">
              <Label.Small text={data.company.name} />
              <Label.Small text={data.group.fandom_name} />
            </span>
            <span className="row-span-2 justify-center items-center text-center">
              <Link to={`/perfil/${data.group.id}`} >
                <Label.Big text={data.group.name}/>
              </Link>
            </span>
          </div>
        </Label.Root>
      </CardFront.Container>
        )}
        {data.group.idols && (
        data.group.idols.map((idol) => {
          return (
            <CardFront.Container key={idol.id}>
              <PhotoRelated url={idol.pictures.profiles[0].url} logoUrl={idol.pictures.banners[0].url} alt={idol.name} id={String(idol.id)} perfil={'idols'}/>
              <Label.Root>
                <div className="grid-rows-2">
                  <span className="row-span-1 w-full flex justify-around gap-1 h-max">
                    <Label.Small text={data.company.name} />
                    <Label.Small text={data.group.name} />
                  </span>
                  <span className="row-span-2 justify-center items-center text-center">
                    <a href={`/idols/${idol.id}`} target="_self">
                      <Label.Big text={idol.name}/>
                    </a>
                  </span>
                </div>
              </Label.Root>
            </CardFront.Container>
          )
        })
        )}
    </div>
  )
}
// Corrigir componente.
export default RelatedIdol
