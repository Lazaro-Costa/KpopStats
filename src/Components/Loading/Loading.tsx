// import React from 'react'
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={style.terminalLoader}>
  <div className={style.terminalHeader}>
    <div className={style.terminalTitle}>Status</div>
    <div className={style.terminalControls}>
      <div className={`${style.control} ${style.close}`}></div>
      <div className={`${style.control} ${style.minimize}`}></div>
      <div className={`{${style.control} ${style.maximize}`}></div>
    </div>
  </div>
  <div className={style.text}>Loading...</div>
</div>

  )
}

export default Loading
