import React from 'react'
import styles from './CSS/CardFrontContainer.module.css'

const CardFrontContainer = ({children} : {children : React.ReactNode}) => {
  // definir {url:string } nas props
  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div className={styles.cardInner}>
        {children}
      </div>
    </div>
  );
}

export default CardFrontContainer
