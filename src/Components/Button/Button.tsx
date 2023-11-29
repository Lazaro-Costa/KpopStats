import style from './CSS/Button.module.css'
const Button = ({label, ...rest}) => {
  return (
    <button className={style.btn} {...rest}>
      <p className='text-3xl text-slate-200 font-sans'>{label}</p>
    </button>
  )
}

export default Button
