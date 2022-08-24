import Navigation from "./Navigation/Navigation";
import styles from './header.module.css'
import { useContext } from "react";
import { characters, StarWarsContext } from "../../utils/constants";

const Header = () => {
    
    const {hero} = useContext(StarWarsContext);
    return (
        <header className={styles.header}>
            <Navigation />
            <h1 className='text-center py-4'>{characters[hero].name}</h1>
        </header>
    )
}

export default Header;