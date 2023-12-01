import React from 'react';
import style from './CSS/Input.module.css'

type Iinput = React.ComponentProps<'input'> &{
  req: boolean;
  content: string;
}
const Input = ({req=true, content, ...rest }: Iinput) => {
  const id = Math.random().toString(36).substring(2, 15)
  return (
    <div className={style.inputGroup}>
      <input
        id={id}
        required={req}
        type="text"
        name="text"
        autoComplete="off"
        className={style.input}
        {...rest}
      />
      <label htmlFor={id} className={style.userLabel}>{content}</label>
    </div>
  );
};

export default Input;
