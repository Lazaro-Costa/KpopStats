import { CardBack } from '.';
import { IGetGroups } from '../../../Interfaces/Interfaces.api';
import IconContainer from '../../Icon/IconContainer';
import LabelSmall from '../../Label/LabelSmall';
import style from './CSS/CardBackComponent.module.css';
const CardBackComponent = ({ group }: { group: IGetGroups }) => {
  return (
    <CardBack.Container>
      <div className={style.containerIcon}>
        {group.idols.map((idol) => {
          return (
            <div key={idol.id} className={style.Icon}>
              <IconContainer url={idol.pictures.profiles[0].url} id={`${idol.id}`}/>
              <LabelSmall text={idol.name} />
            </div>
          );
        })}
      </div>
    </CardBack.Container>
  );
};

export default CardBackComponent;
