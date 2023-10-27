import React from 'react';
import { IDataIdol } from '../../../Interfaces/DataIdol';
import { CardBack } from '../CardBack';
import { CardFront } from '../CardFront';
import style from './CSS/FlipCard.module.css';
import { Arrow } from '../../Arrow';

const FlipCardRoot = ({ data }: { data: IDataIdol }) => {
  const [isActive, setIsActive] = React.useState(false);

  const toggleCard = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={style.flipCard}>
      <div className={`${style.flipCardInner} ${isActive ? style.active : ''}`}>
        <div className={style.flipCardFront}>
          <CardFront.Component key={data.id} data={data} />

          <span className={`${style.spanBtnFwd}`} onClick={toggleCard}>
            <Arrow.Forward />
          </span>
        </div>

        <div className={style.flipCardBack}>
          <CardBack.Component key={data.id} data={data} />

          <span className={`${style.spanBtnBwd}`} onClick={toggleCard}>
            <Arrow.Backward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlipCardRoot;
