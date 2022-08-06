import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { StarWarsContext } from './utils/constants';

const App = () => {
  
  const[navItems, setNavItems] = useState(['Home', 'About', 'Star Wars', 'Contact']);
  const [starWarsInfo, setStarWarsInfo] = useState('Star Wars is an American epic space-opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.');
  const [page, setPage] = useState(navItems[0]);

  return (
    <StarWarsContext.Provider value={{
      setPage: setPage,
      page: page,
      navItems: navItems,
      starWarsInfo: starWarsInfo
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
