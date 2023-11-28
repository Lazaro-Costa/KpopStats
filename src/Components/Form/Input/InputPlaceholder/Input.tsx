import React from 'react';
import style from './CSS/Input.module.css'

type Iinput = React.ComponentProps<'input'> &{
  req: boolean;
  content: string;
}
const Input = ({req=true, content, ...rest }: Iinput) => {
  return (
    <div className={style.inputGroup}>
      <input
        required={req}
        type="text"
        name="text"
        autoComplete="off"
        className={style.input}
        {...rest}
      />
      <label className={style.userLabel}>{content}</label>
    </div>
  );
};

export default Input;
