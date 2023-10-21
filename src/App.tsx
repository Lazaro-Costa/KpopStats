import './App.css'
import { FlipCard } from './Components/Card/FlipCard'
import CardProvider from './Components/Card/CardProvider/CardProvider'

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
  <div>
    <CardProvider>
      <FlipCard.Root />
    </CardProvider>
  </div>
  )

}
export default App
