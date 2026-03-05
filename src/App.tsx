import { Routes, Route, Link } from 'react-router-dom';
import './index.scss';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { MainPage } from './pages/MainPage/MainPage';

const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path={'/about'} element={<AboutPage />}></Route>
        <Route path={'/'} element={<MainPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
