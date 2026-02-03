export interface Game {
  id: string
  titleKey?: string
  descriptionKey?: string
  devDetailKey?: string
  tags?: string[]
  imgCover: string
  platforms?: ('steam' | 'switch')[]
  leftMemoText?: string
  leftMemoColor?: string
  rightMemoText?: string
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
    titleKey: '帶我去地下城吧！！',
    descriptionKey: '《帶我去地下城吧！！》是一款R18卡牌遊戲，在遊戲中，你將扮演男主角，與活潑可愛的女主角尤娜一起展開一場刺激的冒險之旅，一同挑戰突破地下城100層的極限！',
    devDetailKey: '女主角 - 尤娜 (CV:花屋敷やや)<br>神秘的大姐姐 - 夢娜 (CV:星リルカ)<br>淘氣的「魔王」 - 潘蜜拉 (CV:東シヅ)<br><br>系統需求<br>最低配備:<br>作業系統 *: Windows 7+<br>處理器: Core 2 +<br>記憶體: 2 GB 記憶體<br>顯示卡: HD620 +<br>DIRECTX: 版本：9.0c<br>自 2024 年 1 月 1 日（PT）起，Steam 用戶端僅支援 Windows 10 及更新版本。',
    tags: ['卡牌', '冒險', '地下城', 'RPG'],
    imgCover: '/images/game/game01/cover.png',
    platforms: ['steam'],
    leftMemoText: '成人向',
    leftMemoColor: '#FF9999',
    rightMemoText: '好評發售中',
    rightMemoColor: '#FFA500',
    r18: true,
    haveDetailPage: true,
  },
  {
    id: 'game02',
    titleKey: '帶我去地下城吧！！',
    descriptionKey: '一般向',
    devDetailKey: '適合全年齡的地下城探險遊戲',
    imgCover: '/images/game/game02/cover.png',
    platforms: ['switch'],
    leftMemoText: '一般向',
    leftMemoColor: '#99CCFF',
    rightMemoText: '敬請期待',
    rightMemoColor: '#FFE680',
    r18: false,
    haveDetailPage: false,
  },
  {
    id: 'comming_soon',
    titleKey: '新作開發中',
    descriptionKey: '即將推出',
    devDetailKey: '',
    imgCover: '/images/game/coming_soon.png',
    platforms: ['steam'],
    rightMemoText: '敬請期待',
    rightMemoColor: '#FFE680',
    r18: false,
    haveDetailPage: false,
  },
]


// equal all from game
export const featuredGames: FeaturedGame[] = allGames.map((game) => ({ game }))

