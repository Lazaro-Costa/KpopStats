import React from 'react'
import style from './CSS/PG_Component.module.css'

const PG_Component = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default PG_Component
