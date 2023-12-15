import { Link } from 'react-router-dom'
import { CardFront } from '../../Card/CardFront'
import { Label } from '../../Label'

import { IGetRelatedGroup } from './IGetRelatedGroup'
import PhotoRelated from '../../ProfileIdol/relatedIdol/PhotoRelated'

const RelatedGroup = ({data}: {data: IGetRelatedGroup}) => {
  return (
    <div className='flex gap-4 flex-wrap'>
      <CardFront.Container key={data.company.id+"company"}>
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
        {data.idols && (
        data.idols.map((idol) => {
          return (
            <CardFront.Container key={idol.id+"idol"}>
              <PhotoRelated url={idol.pictures.profiles[0].url} logoUrl={idol.pictures.banners[0].url} alt={idol.name} id={String(idol.id)} perfil={'idol'}/>
              <Label.Root>
                <div className="grid-rows-2">
                  <span className="row-span-1 w-full flex justify-around gap-1 h-max">
                    <Label.Small text={data.company.name} />
                    <Label.Small text={data.name} />
                  </span>
                  <span className="row-span-2 justify-center items-center text-center">
                    <a href={`/idol/${idol.id}`} target="_self">
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
export default RelatedGroup
