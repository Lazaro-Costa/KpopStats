import { CardFront } from '.';
import PhotoItem from '../../Photo/PhotoItem';
import { Label } from '../../Label';
import { IGetGroups } from '../../../Interfaces/Interfaces.api';
import { Link } from 'react-router-dom';

const CardComponent = ({ group }: { group: IGetGroups }) => {
  return (
      <CardFront.Container>
        <PhotoItem url={group.pictures.profiles[0].url} logoUrl={group.pictures.banners[0].url} alt={group.name} id={`${group.id}`}/>
        <Label.Root>
          <div className="grid-rows-2">
            <span className="row-span-1 flex gap-1 w-max h-max">
              <Label.Small text={group.company.name}/>
              <Label.Small text={group.fandom_name} />
            </span>
            <span className="row-span-2">
              <Link to={`/group/${group.id}`}>
                <Label.Big text={group.name}
                className="text-md md:text-3xl"/>
              </Link>
            </span>
          </div>
        </Label.Root>
      </CardFront.Container>
  );
};

export default CardComponent;
