import './App.css'
import { CardBack } from './Components/CardBack'
// import CardComponent from './Components/CardIdol/CardComponent'
import { CardIdol } from './Components/CardIdol/index'
const groups = [
  {
    id: 'sadasd123',
    group: 'ITZY',
    fandom: 'Midzy',
    empresa: 'JYP Entertainment',
    url: 'https://i.ibb.co/z26n0yc/Itzy.jpg',
    members: ['Yeji', 'Lia', 'Chaeryeong', 'Ryujin', 'Yuna' ],
  },
  {
    id: 'qwef3456',
    group: 'LE SSERAFIM',
    fandom: 'FEARNOT',
    empresa: 'Source Music',
    url: 'https://i.ibb.co/r2RGW9b/Lesserafim.jpg',
    members: ['Miwazaki Sakura', 'Hong Eunchae', 'Nakamura Kazuha', 'Huh Yunjin', 'Kim Garam', 'Kim Chaewon' ],
  }
]
function App() {
  return (
  <div>
    <CardIdol.Root>
      {/* {groups.map((data) => (
        <CardComponent key={data.id} data={data}/>
      ))} */}
      <CardBack.Root />
    </CardIdol.Root>
  </div>
  )

}
export default App
