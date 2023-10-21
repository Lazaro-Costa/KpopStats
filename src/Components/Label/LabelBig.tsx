import React from 'react'
const LabelBig = ({text} : {text: string}) => {
  return (
    <span className={' text-slate-200 text-3xl font-sans font-bold'}>
      <h1>{text}</h1>
    </span>
  )
}

export default LabelBig
