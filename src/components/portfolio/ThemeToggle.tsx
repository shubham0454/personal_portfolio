import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const THEME_KEY = 'portfolio_theme';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Clear legacy stored 'theme' if it was left over from dark default
    if (localStorage.getItem('theme') === 'dark' && !localStorage.getItem(THEME_KEY)) {
      localStorage.removeItem('theme');
    }
    const savedTheme = localStorage.getItem(THEME_KEY) || localStorage.getItem('theme');
    // Default to light mode (false) on all devices unless explicitly saved as 'dark'
    const shouldBeDark = savedTheme === 'dark';
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem(THEME_KEY, newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="bg-primary/10 hover:bg-primary/10 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </Button>
  );
};

export default ThemeToggle;