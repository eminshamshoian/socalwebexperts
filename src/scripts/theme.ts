// Theme toggle functionality
export type Theme = 'dark' | 'light';

const THEME_KEY = 'socal-theme';

export function getStoredTheme(): Theme | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(THEME_KEY) as Theme | null;
}

export function setStoredTheme(theme: Theme): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(THEME_KEY, theme);
}

export function getPreferredTheme(): Theme {
  const stored = getStoredTheme();
  if (stored) return stored;
  
  // Default to dark mode as specified
  return 'dark';
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  
  if (theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
  }
  
  setStoredTheme(theme);
}

export function toggleTheme(): Theme {
  const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}

// Initialize theme on page load
export function initTheme(): void {
  const theme = getPreferredTheme();
  applyTheme(theme);
}

