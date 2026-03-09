import './styles/index.scss';

import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <p>Some text</p>

      <button onClick={toggleTheme}>Theme</button>

      <AppRouter />
    </div>
  );
};

export default App;
