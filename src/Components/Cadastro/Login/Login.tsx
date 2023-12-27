import React from 'react';
import { apiBase } from '../../Helper/Variables';
import Head from '../../Helper/Head';
import { useUserStore } from '../../../UserZustand';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Login = () => {
  const { user, login, loading} = useUserStore();
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if(user?.username){
      navigate('/');
    }
  }, [user])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(form.username, form.password);
    console.log("HandleSubmit Login " + user?.username);
  };
  const handleTest = e => {
    e.preventDefault();
    fetch(`${apiBase}/users/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(user => console.log(user));
  };
  return (
    <React.Fragment>
      <Head title="Login" description="Login area" />
      {loading && !user ? (
        <Loading />
      ) : (
          <div className="text-slate-200 flex p-2 gap-4 bg-zinc-800 animeLeft">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col w-48">
                <label htmlFor="username">Username</label>
                <pre>{JSON.stringify({'username': 'MidzyTest2'})}</pre>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="text-zinc-800"
                  onChange={e => setForm({ ...form, username: e.target.value })}
                />
              </div>

              <div className="flex flex-col w-48">
                <label htmlFor="password">Password</label>
                <pre>{JSON.stringify({'password': 'UIFeets2'})}</pre>

                <input
                  type="password"
                  name="password"
                  id="password"
                  className="text-zinc-800"
                  onChange={e => setForm({ ...form, password: e.target.value })}
                />
              </div>
              <button className="text-slate-200 p-2 border border-red-500 w-max">
                Login
              </button>
            </form>
            <pre className="text-slate-200">
              {user && JSON.stringify(user, null, 2)}
            </pre>
            <div className="flex flex-col border border-slate-200 rounded-sm p-2">
              <h1 className="text-slate-200">Logout</h1>

              <button
                className="text-slate-200 p-2 border border-red-500 w-max"
                onClick={e => handleTest(e)}
              >
                Testar
              </button>
            </div>
          </div>
        )}
    </React.Fragment>
  );
};
//Checar porque o nome não aparece quando o usuário está logado.

export default Login;
