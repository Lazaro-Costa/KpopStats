import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header.Root />
        <main className="AppBody">
          <Routes>
            <Route path='/' element={<Home />} key='home'/>
            <Route path='/perfil/:user' element={<Profile />} key='profile'/>
            {/* <Route path='*' element={<NotFound />} key='404'/> */}
          </Routes>
        </main>
        <Footer.Root />
      </BrowserRouter>
    </div>
  );
}
export default App;
