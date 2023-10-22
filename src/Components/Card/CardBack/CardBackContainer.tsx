import style from './CSS/CardBackContainer.module.css'
const CardBackContainer = ({children}: {children: React.ReactNode}) => {
  // definir {url:string } nas props
  return (
    <div className={style.card}>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.cardInner}>
        {children}
      </div>
    </div>
  );
}

export default CardBackContainer
