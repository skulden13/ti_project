import './styles/index.scss';

import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}></Route>
          <Route path={'/'} element={<MainPage />}></Route>
        </Routes>
      </Suspense>
      <p>Some text</p>
    </div>
  );
};

export default App;
