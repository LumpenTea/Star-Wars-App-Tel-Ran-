import React, { useContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { FunctionalContext, StarWarsContext } from './utils/constants';

const App = () => {

  const appData = useContext(FunctionalContext);
  const [page, setPage] = useState(appData.header.navItems[0]);

  return (
    <StarWarsContext.Provider value={{
      setPage: setPage,
      page: page,
      navItems: appData.header.navItems,
      main: appData.main
    }}>
      <div className='container-fluid'>
        <Header />
        <Main />
        <Footer />
      </div>
    </StarWarsContext.Provider>
  );

}

export default App;
