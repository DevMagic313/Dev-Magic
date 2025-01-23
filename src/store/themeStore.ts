import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStyle = 'masculine' | 'feminine';

interface ThemeStore {
  isDarkMode: boolean;
  themeStyle: ThemeStyle;
  toggleTheme: () => void;
  setThemeStyle: (style: ThemeStyle) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: true,
      themeStyle: 'masculine',
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setThemeStyle: (style) => set({ themeStyle: style }),
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ 
        isDarkMode: state.isDarkMode,
        themeStyle: state.themeStyle 
      }),
    }
  )
);