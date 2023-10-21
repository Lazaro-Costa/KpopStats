import React from 'react'
import style from './CSS/CardProvider.module.css'
const CardProvider = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default CardProvider