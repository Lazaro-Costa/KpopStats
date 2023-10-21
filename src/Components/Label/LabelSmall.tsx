import React from 'react'
import style from './CSS/LabelSmall.module.css'
type ILabelSmall = {
  text: string;
}
const LabelSmall = ({text}: ILabelSmall) => {
  return (
    <span className={ style.small + ' text-slate-200 text-sm'  }><p>{text}</p></span>
  )
}

export default LabelSmall
