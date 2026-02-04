import translations from '../i18n'
import type { Language } from '../i18n'

const defaultLanguage: Language = 'ja'

export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage
  
  const urlParams = new URLSearchParams(window.location.search)
  const urlLang = urlParams.get('lang')
  const savedLang = localStorage.getItem('language')
  
  return (urlLang || savedLang || defaultLanguage) as Language
}

export function t(key: string): string {
  const lang = getCurrentLanguage()
  const trans = translations[lang] || translations[defaultLanguage]
  
  const keys = key.split('.')
  let value: any = trans
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}

export function updateContent() {
  const lang = getCurrentLanguage()
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (key) {
      el.textContent = t(key)
    }
  })
  
  // Update all elements with data-i18n-html attribute (for HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html')
    if (key) {
      el.innerHTML = t(key)
    }
  })
  
  // Update document title
  const titleElement = document.querySelector('title[data-i18n-title]')
  if (titleElement) {
    const titleKey = titleElement.getAttribute('data-i18n-title')
    if (titleKey) {
      const translatedTitle = t(titleKey)
      document.title = `${translatedTitle} | HanabiFuusen`
    }
  }
}

// Auto-update on page load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', updateContent)
  window.addEventListener('languagechange', updateContent)
}
