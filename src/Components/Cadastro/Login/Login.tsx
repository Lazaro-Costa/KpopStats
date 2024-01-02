import React from 'react';
import Head from '../../Helper/Head';
import { useUserStore } from '../../../UserZustand';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { trim } from '../../../utils/trim';
import style from './CSS/LoginForm.module.css';

const Login = () => {
  const { user, login, loading } = useUserStore();
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user?.username) {
      navigate('/');
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await login(trim(form.username), trim(form.password));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Head title="Login" description="Login area" />
      {loading && !user ? (
        <Loading />
      ) : (
        <div className="text-slate-200 flex p-2 gap-4 justify-center items-center animeLeft self-center">
          <div className={`${style.login} ${style.wrap}`}>
          
            <div className={style.h1}>Login</div>
            <input
              placeholder="Username"
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
            />
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <button
              className={style.btn}
              type="submit"
              onClick={e => handleSubmit(e)}
            >Login</button>
          </div>

          <pre className="text-slate-200">
            {user && JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}
    </React.Fragment>
  );
};
// Continuar checagem do Login. Testar login e logout e melhorar o desing

export default Login;
