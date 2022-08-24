import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { dreamTeam, StarWarsContext } from './utils/constants';

const App = () => {

  const [hero, setHero] = useState(dreamTeam[0]);
  const navItems = useRef([{ title: 'Home', route: 'home' }, { title: 'About Me', route: 'about_me' }, { title: 'Star Wars', route: 'star_wars' }, { title: 'Contact', route: 'contact' }]);
  const starWarsInfo = useRef('Star Wars is an American epic space-opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.');

  const getItemByRoute = () => {
    const route = window.location.hash.split('/');
    const page = navItems.current.find(item => route[1] === item.route);
    const heroIndex = dreamTeam.find(item => route[2] === item);
    if(heroIndex) setHero(route[2]);
    return page ? page.route : navItems.current[0].route;
  }

  const [page, setPage] = useState(() => getItemByRoute());

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setPage(getItemByRoute());
    })
  }, []);

  return (
    <StarWarsContext.Provider value={{
      setPage: setPage,
      page: page,
      navItems: navItems.current,
      starWarsInfo: starWarsInfo.current,
      hero: hero,
      setHero: setHero
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
