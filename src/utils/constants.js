import mainHero from '../images/main.jpg';
import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';

export const appData = {

    header: {
        navItems: ['Home', 'About', 'Star Wars', 'Contact']
    },
    main: {
        base_url: 'https://sw-info-api.herokuapp.com',
        homePage: {
            hero: mainHero,
            dreamTeam: [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9]
        },
        starWarsPage: {
            StarWarsInfo: 'Star Wars is an American epic space-opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.'
        }
    }
}

export const friends = [
    friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9
]

export const navItems = [
    'Home', 'About', 'Star Wars', 'Contact'
]

export const StarWarsInfo = `Star Wars is an American epic space-opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.`;

export const base_url = 'https://sw-info-api.herokuapp.com';