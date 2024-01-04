type ILabelBig = {
  text: string;
  verde?: boolean;
  bg?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
const LabelBig = ({text, verde=false, bg=false, ...rest} : ILabelBig) => {
  return (
    <span className={'text-3xl font-sans font-bold w-max' + (verde ? ' text-green-500' : ' text-slate-200') + (bg ? ' py-1 px-2 rounded-lg bg-zinc-900 hover:bg-zinc-800' : '')}>
      <h1 {...rest}>{text}</h1>
    </span>
  )
}

export default LabelBig
