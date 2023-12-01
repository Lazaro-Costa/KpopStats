// import { blockStatement } from '@babel/types';
import React from 'react'
import style from './CSS/InputDate.module.css'
type IDateInput = React.ComponentProps<'input'> &{
  label: string;
}
const InputDate = ({label, ...props}: IDateInput) => {
  return (
    <div className={style.inputGroup}>
      <input className={style.input} id={label} name={label} type="date" {...props}/>
      <label className={style.userLabel} htmlFor={label}>{label}</label>
    </div>
  )
}

export default InputDate
