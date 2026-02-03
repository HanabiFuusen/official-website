export interface Game {
  id: string
  title?: string
  titleKey?: string
  description?: string
  descriptionKey?: string
  imgCover: string
  platforms?: ('steam' | 'switch')[]
  leftMemoText?: string
  leftMemoColor?: string
  rightMemoText?: string
  rightMemoColor?: string
  showR18?: boolean
}

export interface FeaturedGame {
  game: Game
}

export const allGames: Game[] = [
  {
    id: 'game01',
    titleKey: '帶我去城下城吧！！',
    descriptionKey: '成人向版本',
    imgCover: '/images/game/game01/cover.png',
    platforms: ['steam'],
    leftMemoText: '成人向',
    leftMemoColor: '#FF9999',
    rightMemoText: '好評發售中',
    rightMemoColor: '#FFA500',
    showR18: true,
  },
  {
    id: 'game02',
    titleKey: '帶我去城下城吧！！',
    descriptionKey: '一般向',
    imgCover: '/images/game/game02/cover.png',
    platforms: ['switch'],
    leftMemoText: '一般向',
    leftMemoColor: '#99CCFF',
    rightMemoText: '敬請期待',
    rightMemoColor: '#FFE680',
    showR18: false,
  },
  {
    id: 'comming_soon',
    titleKey: '即將推出',
    descriptionKey: '即將推出',
    imgCover: '/images/game/coming_soon.png',
    platforms: ['steam'],
    rightMemoText: '敬請期待',
    rightMemoColor: '#FFE680',
    showR18: false,
  },
]


// equal all from game
export const featuredGames: FeaturedGame[] = allGames.map((game) => ({ game }))

