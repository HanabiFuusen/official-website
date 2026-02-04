export interface Game {
  id: string
  titleKey?: string
  descriptionKey?: string
  devDetailKey?: string
  tagKeys?: string[]
  imgCover: string
  platforms?: ('steam' | 'switch')[]
  leftMemoTextKey?: string
  leftMemoColor?: string
  rightMemoTextKey?: string
  rightMemoColor?: string
  r18?: boolean
  haveDetailPage?: boolean
}

export interface FeaturedGame {
  game: Game
}

export const allGames: Game[] = [
  {
    id: 'game01',
    titleKey: 'games.game01.titleKey',
    descriptionKey: 'games.game01.descriptionKey',
    devDetailKey: 'games.game01.devDetailKey',
    tagKeys: ['games.tags.card', 'games.tags.adventure', 'games.tags.dungeon', 'games.tags.rpg'],
    imgCover: '/images/game/game01/cover.png',
    platforms: ['steam'],
    leftMemoTextKey: 'games.game01.leftMemoTextKey',
    leftMemoColor: '#FF9999',
    rightMemoTextKey: 'games.game01.rightMemoTextKey',
    rightMemoColor: '#FFA500',
    r18: true,
    haveDetailPage: true,
  },
  {
    id: 'game02',
    titleKey: 'games.game02.titleKey',
    descriptionKey: 'games.game02.descriptionKey',
    devDetailKey: 'games.game02.devDetailKey',
    imgCover: '/images/game/game02/cover.png',
    platforms: ['switch'],
    leftMemoTextKey: 'games.game02.leftMemoTextKey',
    leftMemoColor: '#99CCFF',
    rightMemoTextKey: 'games.game02.rightMemoTextKey',
    rightMemoColor: '#FFE680',
    r18: false,
    haveDetailPage: false,
  },
  {
    id: 'comming_soon',
    titleKey: 'games.comming_soon.titleKey',
    descriptionKey: 'games.comming_soon.descriptionKey',
    devDetailKey: 'games.comming_soon.devDetailKey',
    imgCover: '/images/game/coming_soon.png',
    platforms: ['steam'],
    rightMemoTextKey: 'games.comming_soon.rightMemoTextKey',
    rightMemoColor: '#FFE680',
    r18: false,
    haveDetailPage: false,
  },
]


// equal all from game
export const featuredGames: FeaturedGame[] = allGames.map((game) => ({ game }))

