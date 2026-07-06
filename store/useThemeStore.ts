import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light', // Default initial state
  
  toggleTheme: () => {
    const { theme } = get();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Side effect: Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Side effect: Update Storage
    localStorage.setItem('theme', newTheme);
    
    set({ theme: newTheme });
  },

  initializeTheme: () => {
    // Check local storage on mount
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      set({ theme: savedTheme });
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to light if no preference
      set({ theme: 'light' });
      document.documentElement.classList.remove('dark');
    }
  }
}));