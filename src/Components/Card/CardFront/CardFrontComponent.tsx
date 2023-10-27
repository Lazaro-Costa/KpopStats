import { CardFront } from '.';
import PhotoItem from '../../Photo/PhotoItem';
import { Label } from '../../Label';
import { IDataIdol } from '../../../Interfaces/DataIdol';

const CardComponent = ({ data }: { data: IDataIdol }) => {
  return (
      <CardFront.Container>
        <PhotoItem url={data.url} alt={data.group} />
        <Label.Root>
          <div className="grid-rows-2">
            <span className="row-span-1 flex gap-1 w-max h-max">
              <Label.Small text={data.empresa} />
              <Label.Small text={data.fandom} />
            </span>
            <span className="row-span-2">
              <Label.Big text={data.group} />
            </span>
          </div>
        </Label.Root>
      </CardFront.Container>
  );
};

export default CardComponent;