import './App.css'
import { Header } from './Components/Header'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import { profiles } from './DataMock/DataIdol'

function App() {
  return (
  <div className='App'>
    <Header.Root />
    <main className="AppBody">
      {/* <Home /> */}
      {profiles && profiles.map(profile => <Profile key={profile.id} data={profile}/>)}
    </main>
  </div>
  )

}
export default App
