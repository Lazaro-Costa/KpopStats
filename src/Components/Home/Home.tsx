import CardProvider from '../Card/CardProvider/CardProvider'
import { FlipCard } from '../Card/FlipCard'
import { groups } from '../../DataMock/DataIdol'

const Home = () => {
  return (
    <CardProvider>
      {groups.map((group) => {
        return (
          <FlipCard.Root key={group.id} data={group} />
        )
      })}
    </CardProvider>
  )
}

export default Home
