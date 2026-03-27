import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
      <div id="modal-root" />
    </div>
  );
};

export default App;
