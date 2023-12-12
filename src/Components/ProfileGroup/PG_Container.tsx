import React from 'react'
import style from './CSS/PG_Container.module.css'
const PG_Container = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={`${style.container} p-2`}>
      {children}
    </div>
  )
}

export default PG_Container
