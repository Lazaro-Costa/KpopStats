import React from 'react'
import CardProvider from '../Card/CardProvider/CardProvider'
import { FlipCard } from '../Card/FlipCard'
import { IGroupCard, IGroupRaw, convertToIdol } from '../../DataMock/DataIdol'
import FetchInfoWithPagination from '../../utils/FetchInfoWithPagination'
// import { groups } from '../../DataMock/DataIdol'
const Home = () => {
  const [groupRaw, setGroupRaw] = React.useState<IGroupRaw[]>([])
  const [groups, setGroups] = React.useState<IGroupCard[]>([])
  FetchInfoWithPagination({
    uri: 'groups',
    entity: groupRaw,
    page: 1,
    setEntity: setGroupRaw,
  })
  React.useEffect(() => {
    setGroups(convertToIdol(groupRaw))
  }, [groupRaw])
  return (
    <CardProvider>
      {groups.map((group) => {
        return (
          <FlipCard.Root key={group.id} data={group} />
        )
      })}
      <div><h1>Load More</h1></div>
    </CardProvider>
  )
}

export default Home
