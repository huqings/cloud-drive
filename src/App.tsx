import React from 'react';
import Garfish from 'garfish';
import Header from './components/header';
import Footer from './components/footer';
import './globals.css'
import Main from './services/router';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [openOtherApp, setOpenOtherApp] = React.useState<boolean>(false);
  const [showHeader, setShowHeader] = React.useState<boolean>(true);
  const [showFooter, setShowFooter] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadApp = async () => {
      if (location.pathname.startsWith('/earn')) {
        setOpenOtherApp(true);
        setShowFooter(false);
        
        // 直接加载子应用
        const app = await Garfish.loadApp('earn', {
          entry: 'http://localhost:3000',
          basename: '/earn',
          domGetter: '#container',
        });
        
        if (app && !app.mounted) {
          await app.mount();
        }
      } else if (location.pathname.startsWith('/staking')) {
        setOpenOtherApp(true);
        setShowFooter(false);
        
        // 直接加载子应用
        const app = await Garfish.loadApp('staking', {
          entry: 'http://localhost:10010',
          basename: '/staking',
          domGetter: '#container',
        });
        
        if (app && !app.mounted) {
          await app.mount();
        }
      } else {
        setOpenOtherApp(false);
        setShowFooter(true);
        
        // 卸载子应用
        const earnApp = Garfish.cacheApps['earn'];
        if (earnApp && earnApp.mounted) {
          earnApp.unmount();
        }
        
        const stakingApp = Garfish.cacheApps['staking'];
        if (stakingApp && stakingApp.mounted) {
          stakingApp.unmount();
        }
      }
    };
    
    loadApp();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;