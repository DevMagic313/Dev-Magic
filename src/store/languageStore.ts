import { create } from 'zustand';

type Language = 'en' | 'ur';

interface LanguageStore {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  currentLanguage: 'en',
  setLanguage: (lang) => set({ currentLanguage: lang }),
}));