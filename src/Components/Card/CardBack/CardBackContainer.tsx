import style from './CSS/CardBackRoot.module.css'
const CardBackContainer = () => {
  // definir {url:string } nas props
  return (
    <div className={style.card}>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.cardInner}>
        {/* {children} */}
      </div>
    </div>
  );
}

export default CardBackContainer
