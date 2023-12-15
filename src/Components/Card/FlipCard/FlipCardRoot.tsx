import React from 'react';
import { CardBack } from '../CardBack';
import { CardFront } from '../CardFront';
import style from './CSS/FlipCard.module.css';
import { Arrow } from '../../Arrow';
import { IGetGroups } from '../../../Interfaces/Interfaces.api';

const FlipCardRoot = ({ group }: { group: IGetGroups }) => {
  const [isActive, setIsActive] = React.useState(false);
  const toggleCard = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={style.flipCard}>
      <div className={`${style.flipCardInner} ${isActive ? style.active : ''}`}>
        <div className={style.flipCardFront}>
          <CardFront.Component key={`${group.id} front`} group={group} />

          <span className={`${style.spanBtnFwd}`} onClick={toggleCard}>
            <Arrow.Forward />
          </span>
        </div>

        <div className={style.flipCardBack}>
          <CardBack.Component key={`${group.id} back`} group={group} />
          <span className={`${style.spanBtnBwd}`} onClick={toggleCard}>
            <Arrow.Backward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlipCardRoot;
