import style from './CSS/CardBack.module.css'

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
const CardBackRoot = () => {
  return (
    <div className={style.flipCard}>
    <div className={style.flipCardInner}>
        <div className={style.flipCardFront}>
            Content Front
        </div>
        <div className={style.flipCardBack}>
            Content Back
        </div>
    </div>
</div>
  )
}

export default CardBackRoot
