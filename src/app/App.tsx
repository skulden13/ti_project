import './styles/index.scss';

import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      
      <AppRouter />

      <p>Some text</p>
    </div>
  );
};

export default App;
