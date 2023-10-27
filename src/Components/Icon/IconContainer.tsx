import style from './CSS/IconContainer.module.css';

const IconContainer = ({ url }: { url: string }) => {
  return (
    <div className={style.card}>
      <div className={style.card2}>
        <img src={url} />
      </div>
    </div>
  );
};

export default IconContainer;
