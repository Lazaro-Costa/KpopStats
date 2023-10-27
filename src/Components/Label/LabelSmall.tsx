import style from './CSS/LabelSmall.module.css'
type ILabelSmall = {
  text: string;
  verde?: boolean;
}
const LabelSmall = ({text, verde=false}: ILabelSmall) => {
  return (
    <span className=
    { style.small + ' text-slate-200 text-xs bg-zinc-900 hover:bg-zinc-800' + (verde ? ' text-emerald-500 font-bold' : '')}
    ><p>{text}</p></span>
  )
}

export default LabelSmall
