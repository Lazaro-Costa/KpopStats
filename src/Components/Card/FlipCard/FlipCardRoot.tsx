import { IDataIdol } from '../../../Interfaces/DataIdol';
import { CardBack } from '../CardBack';
import { CardFront } from '../CardFront';
import style from './CSS/CardBack.module.css';


const FlipCardRoot = ({data}: {data: IDataIdol}) => {
  return (
    <div className={style.flipCard}>
      <div className={style.flipCardInner}>
        <div className={style.flipCardFront}>
          {/* Content Front */}
          <CardFront.Component key={data.id} data={data} />
        </div>
        <div className={style.flipCardBack}>
          <CardBack.Component key={data.id} data={data} />
        </div>
      </div>
    </div>
  );
};

export default FlipCardRoot;
