import React, { useMemo, useState, FC } from 'react';
import { LOCAL_STARAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme: Theme = localStorage.getItem(LOCAL_STARAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const dafaultProps = useMemo(() => ({
    theme, setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={dafaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
