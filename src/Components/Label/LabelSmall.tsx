import { twMerge } from 'tailwind-merge'
type ILabelSmall = {
  text: string;
  verde?: boolean;
}
const LabelSmall = ({text, verde=false}: ILabelSmall) => {
  return (
    <span className={twMerge('py-1 px-2 rounded-lg font-sans text-slate-200 text-xs bg-zinc-900 hover:bg-zinc-800', (verde && ' text-sky-500 font-bold'))}

    ><p>{text}</p></span>
  )
}
export default LabelSmall
