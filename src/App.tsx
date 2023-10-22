import './App.css'
import { FlipCard } from './Components/Card/FlipCard'
import CardProvider from './Components/Card/CardProvider/CardProvider'
import { groups } from './DataMock/DataIdol'
import { Header } from './Components/Header'

// const groups = [
//   {
//     id: 'sadasd123',
//     group: 'ITZY',
//     fandom: 'Midzy',
//     empresa: 'JYP Entertainment',
//     url: 'https://i.ibb.co/z26n0yc/Itzy.jpg',
//     members: ['Yeji', 'Lia', 'Chaeryeong', 'Ryujin', 'Yuna' ],
//   },
//   {
//     id: 'qwef3456',
//     group: 'LE SSERAFIM',
//     fandom: 'FEARNOT',
//     empresa: 'Source Music',
//     url: 'https://i.ibb.co/r2RGW9b/Lesserafim.jpg',
//     members: ['Miwazaki Sakura', 'Hong Eunchae', 'Nakamura Kazuha', 'Huh Yunjin', 'Kim Garam', 'Kim Chaewon' ],
//   }
// ]

function App() {
  return (
  <div className='App'>
    <Header.Root />
    <main className="AppBody">  
    <CardProvider>
      {groups.map((group) => {
        return (
          <FlipCard.Root key={group.id} data={group} />
        )
      })}
    </CardProvider>
    </main>
  </div>
  )

}
export default App
