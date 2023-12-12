import { CardBack } from '.';
import { IGroupCard } from '../../../DataMock/DataIdol';
import IconContainer from '../../Icon/IconContainer';
import LabelSmall from '../../Label/LabelSmall';
import style from './CSS/CardBackComponent.module.css';
const CardBackComponent = ({ data }: { data: IGroupCard }) => {
  return (
    <CardBack.Container>
      <div className={style.containerIcon}>
        {data.members.map((member) => {
          return (
            <div key={member.id} className={style.Icon}>
              <IconContainer url={member.icon} id={member.id}/>
              <LabelSmall text={member.name} />
            </div>
          );
        })}
      </div>
    </CardBack.Container>
  );
};

export default CardBackComponent;
