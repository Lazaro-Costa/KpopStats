import style from './CSS/FooterRoot.module.css'
const FooterRoot = () => {
  return (
    <footer className={style.footer + ' bg-slate-800'}>
      <nav className={style.nav + ' container'}>
        <h1 className='text-slate-200'>This is the Footer</h1>
      </nav>

    </footer>
  )
}

export default FooterRoot
