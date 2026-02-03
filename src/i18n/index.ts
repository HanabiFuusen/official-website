import zhTW from './zh-TW.json'
import en from './en.json'
import ja from './ja.json'

export type Language = 'zh-TW' | 'en' | 'ja'

export const translations = {
  'zh-TW': zhTW,
  'en': en,
  'ja': ja,
}

export function getTranslations(lang: Language = 'zh-TW') {

  return translations[lang] || translations['zh-TW']
}

// Helper function to get nested translation value
export function t(translations: any, key: string): string {
  const keys = key.split('.')
  let value = translations
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key
}

export default translations
