import './styles/index.scss';

import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      
      <Navbar />

      <p>Some text</p>

      <AppRouter />
    </div>
  );
};

export default App;
