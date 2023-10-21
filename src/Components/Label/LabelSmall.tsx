import style from './CSS/LabelSmall.module.css'
type ILabelSmall = {
  text: string;
}
const LabelSmall = ({text}: ILabelSmall) => {
  return (
    <span className={ style.small + ' text-slate-200 text-xs bg-zinc-900 hover:bg-zinc-800'}><p>{text}</p></span>
  )
}

export default LabelSmall
