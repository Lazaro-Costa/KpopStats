import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { Label } from '../Label';
import { useUserStore } from '../../UserZustand';

const HeaderRoot: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const { user, loading, logout } = useUserStore();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  React.useEffect(() => {
    console.log('Header useEffect ' + user?.username);
  }, [user]);
  return (
    <header
      className={`glass border-glass-b text-slate-50 w-full h-16 fixed top-0 transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 -top-16'
      }`}
    >
      <div className="h-full flex p-2">
        <nav className="self-start">
          <Link to="/" aria-label="KpopStats - Home">
            <Logo />
          </Link>
        </nav>

        <nav className="grid grid-cols-2 gap-4 w-full items-center ">
          {loading ? (
            <div className="col-span-1 flex justify-self-end items-center w-full">
              Loading...
            </div>
          ) : user ? (
            <>
              <Link
                to={'/conta'}
                className="col-span-1 flex text-slate-200 justify-self-end items-center h-full"
              >
                {<Label.Small text={user.username} className={'text-lg'} />}
              </Link>
              <div className="justify-self-end items-center flex gap-2 justify-center h-full">
                <Link
                  to={'/cadastro'}
                  className="flex text-slate-200 justify-self-end items-center h-full px-6 py-0 rounded-lg bg-zinc-800 hover:border hover:outline-2 hover:border-emerald-500"
                >
                  Cadastro
                </Link>

                <Link
                  to={'/update'}
                  className="flex text-slate-200 justify-self-end items-center h-full px-6 py-0 rounded-lg bg-zinc-800 hover:border hover:outline-2 hover:border-yellow-500"
                >
                  Update
                </Link>

                <button
                  className="flex text-slate-200 items-center h-full px-6 py-0 rounded-lg bg-zinc-800 hover:border hover:outline-2 hover:border-red-500"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </div>
            </>
          ) : (
            <Link
              to={'/login'}
              className="col-span-2 flex text-slate-200 justify-self-end items-center h-full px-4 py-2 rounded-xl bg-emerald-600 border border-emerald-900"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderRoot;
