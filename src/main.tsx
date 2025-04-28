import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../i18n/English/en.json'
import es from '../i18n/Spanish/es.json'

i18next.use(initReactI18next).init({
  lng: 'en', 
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
