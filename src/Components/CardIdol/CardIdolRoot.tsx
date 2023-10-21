import React from 'react'
import style from './CSS/CardIdolRoot.module.css'
const CardIdolRoot = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default CardIdolRoot