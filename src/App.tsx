import './styles/index.scss';

import { Routes, Route, Link } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Theme</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
          <Route path={'/'} element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
      <p>Some text</p>
    </div>
  );
};

export default App;
