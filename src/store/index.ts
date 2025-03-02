import { create } from 'zustand';

// Navigation store
interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  setActiveSection: (section: string) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'home',
  isMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));

// Theme store (adding the missing export)
interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: true, // Default to dark mode as per requirements
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
