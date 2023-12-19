import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import Home from './Components/Home/Home'
import { Footer } from './Components/Footer';
import Cadastro from './Components/Cadastro/Cadastro';
import ProfileIdol from './Components/ProfileIdol/ProfileIdol';
import ProfileCompany from './Components/ProfileCompany/ProfileCompany';
import ProfileGroups from './Components/ProfileGroup/ProfileGroup';
import Login from './Components/Cadastro/Login/Login';
import { useUserStore } from './UserZustand';
import React from 'react';
function App() {
  const { autoLogin } = useUserStore();

  React.useEffect(() => {
    autoLogin();
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header.Root />
        <main className="AppBody">
          <Routes>
            <Route path='/' element={<Home />} key='home'/>
            <Route path='/group/:id' element={<ProfileGroups />} key='group'/>
            <Route path='/company/:id' element={<ProfileCompany />} key='company'/>
            <Route path='/idol/:id' element={<ProfileIdol />} key='idol'/>
            <Route path='/cadastro' element={<Cadastro />} key='cadastro'/>
            <Route path='/login/*' element={<Login />} key='login'/>
            {/* <Route path='*' element={<NotFound />} key='404'/> */}
          </Routes>
        </main>
        <Footer.Root />
      </BrowserRouter>
    </div>
  );
}
export default App;
