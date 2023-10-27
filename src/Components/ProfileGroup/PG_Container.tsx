import React from 'react'
import style from './CSS/PG_Container.module.css'
const PG_Container = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default PG_Container
