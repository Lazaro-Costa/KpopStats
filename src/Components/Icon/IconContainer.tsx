import { Link } from 'react-router-dom';
import style from './CSS/IconContainer.module.css';

const IconContainer = ({ url, id }: { url: string, id: string }) => {
  return (
    <div className={style.card}>
      <div className={style.card2}>
        <Link to={`/idols/${id}`}>
        <img src={url} />
        </Link>
      </div>
    </div>
  );
};

export default IconContainer;
