export interface NewsItem {
  id: string
  date: string
  titleKey: string
  contentKey: string
}

// 在這裡新增 News，最新的放在最上面
export const newsList: NewsItem[] = [
  {
    id: '20260203_01',
    date: '2026/02/03',
    titleKey: 'news.items.20260203_01.title',
    contentKey: 'news.items.20260203_01.content',
  }
]

// 根據 ID 取得單篇 News
export function getNewsById(id: string): NewsItem | undefined {
  return newsList.find((news) => news.id === id)
}
