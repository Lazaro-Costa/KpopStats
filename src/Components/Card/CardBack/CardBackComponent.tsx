import { CardBack } from '.';
import { IDataIdol } from '../../../Interfaces/DataIdol';
import IconContainer from '../../Icon/IconContainer';
import LabelSmall from '../../Label/LabelSmall';
import style from './CSS/CardBackComponent.module.css';
const CardBackComponent = ({ data }: { data: IDataIdol }) => {
  return (
    <CardBack.Container>
      <div className={style.containerIcon}>
        {data.members.map((member) => {
          return (
            <div className={style.Icon}>
              <IconContainer key={member.id} url={member.icon} />
              <LabelSmall text={member.name} />
            </div>
          );
        })}
      </div>
    </CardBack.Container>
  );
};

export default CardBackComponent;
