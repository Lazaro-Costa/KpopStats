import React from 'react'
import style from './CSS/HeaderRoot.module.css'
const HeaderRoot = () => {
  return (
    <header className={style.header + ' bg-slate-800'}>
      <nav className={style.nav + ' container'}>
        <h1 className='text-slate-200'>This is the Header</h1>
      </nav>
        
    </header>
  )
}

export default HeaderRoot
